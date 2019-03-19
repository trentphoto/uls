import * as React from 'react'
import renderHTML from 'react-render-html'
import { InlineLinkShortCode, ButtonShortCode } from './shortcodes'

interface ShortCode {
  code: string
  params: { [key: string]: string }
  original: string
}

/**
 *
 * Add new shortcodes here
 *
 * @param code - ShortCode
 */
export const selectShortCode = (code: ShortCode) => {
  switch (code.code) {
    case 'link':
      return <InlineLinkShortCode data={code as any} />
    case 'button':
      return <ButtonShortCode data={code as any} />
    default:
      return null
  }
}

export const parseParams = (data: string) => {
  const regexForKey = /\s(.*?)=/g
  const regexForValue = /&#8221;(.*?)&#8221;/g
  const keys: string[] = []
  const values: string[] = []
  let params = null
  data.replace(regexForKey, ({}, g1: string): any => keys.push(g1))
  data.replace(regexForValue, ({}, g1: string): any => values.push(g1))
  params = keys.reduce(
    (acc: any, key: string, index: number) => ({
      ...acc,
      [key]: values[index]
    }),
    null
  )
  return params
}

export const getFirstWord = (data: string) => {
  const regex = /^([\w\-]+)/
  const word = data.match(regex)
  if (word) {
    return word[0]
  }
  return ''
}

// const escapeRegExp = (string: string) =>
//   string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string

export const replaceShortCodes = (
  codes: ShortCode[],
  data: string,
  index: number,
  jsx: any
): any => {
  if (index >= codes.length) {
    return jsx
  }

  const code = codes[index]
  // console.log(jsx, codes, data, index)
  if (index === codes.length - 1) {
    const beforeRegex = /[\s\S]*\[/g
    const before = new RegExp(beforeRegex).exec(data)
    const afterRegex = /\][\s\S]*/g
    const after = new RegExp(afterRegex).exec(data)

    if (before && after) {
      const newJSX = (
        <>
          {jsx}
          <div id="shortcode-renderer">
            {renderHTML(before[0].replace('[', ''))}
            {selectShortCode(code)}
            {renderHTML(after[0].replace(']', ''))}
          </div>
        </>
      )
      return replaceShortCodes(codes, data, (index += 1), newJSX)
    }
  }
  const before = renderContentBefore(data, code, jsx)
  if (before) {
    return replaceShortCodes(codes, before.data, (index += 1), before.jsx)
  }
}

const renderContentBefore = (data: string, code: any, jsx: any) => {
  const beforeRegex = /[\s\S]*?\[/
  const before = new RegExp(beforeRegex).exec(data)
  if (before) {
    const parsed = before[0].replace('[', '')
    const newData = data.replace(parsed + code.original, '')
    const newJSX = (
      <>
        {jsx}
        {renderHTML(parsed)}
        {selectShortCode(code)}
      </>
    )
    return { data: newData, jsx: newJSX }
  }
  return null
}

const renderShortcodes = (data: string) => {
  const dataToParse = data
  const regex = /\[(.*?)\]/g
  const codes: ShortCode[] = []
  dataToParse.replace(
    regex,
    ({}, g1: string): any =>
      codes.push({
        code: getFirstWord(g1),
        params: parseParams(g1),
        original: `[${g1}]`
      })
  )
  if (codes.length !== 0) {
    console.log(codes)
    return replaceShortCodes(codes, data, 0, null)
  }
  return renderHTML(data)
}

export default renderShortcodes
