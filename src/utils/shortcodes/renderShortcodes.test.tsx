import * as React from 'react'
import renderHTML from 'react-render-html'
import renderShortcodes, {
  parseParams,
  replaceShortCodes
} from './renderShortcodes'
import { InlineLinkShortCode } from './shortcodes'

const data = {
  withCode: '<p>this is content with a [link path="/about" label="About"]</p>',
  withCode2:
    '<p>this is content with a [link path="/about" label="About"] and another link to [link path="/" label="Home"]</p>',
  withParams: 'this is content [code] with a [link path="/about"]',
  withoutCode: 'this is content without a shortcode',
  codeWithParams1: 'link path="/about"',
  codeWithParams2: 'link path="/about" label="About" icon="info-circle"',
  codes: [
    {
      code: 'link',
      params: { path: '/about', label: 'About' },
      original: '[link path="/about" label="About"]'
    }
  ]
}

describe('parse params', () => {
  it('should return a dictionary of params from its input', () => {
    expect(parseParams(data.codeWithParams1)).toEqual({ path: '/about' })
    expect(parseParams(data.codeWithParams2)).toEqual({
      path: '/about',
      label: 'About',
      icon: 'info-circle'
    })
  })
  it('should return null if no params', () => {
    expect(parseParams(data.withoutCode)).toEqual(null)
  })
})

describe('render shortcodes', () => {
  it('should find content between all [] and replace them with the correct shortcode', () => {
    expect(renderShortcodes(data.withCode2)).toEqual(
      <React.Fragment>
        <React.Fragment>
          <p>this is content with a </p>
          <InlineLinkShortCode
            data={{
              code: 'link',
              original: '[link path="/about" label="About"]',
              params: { label: 'About', path: '/about' }
            }}
          />
        </React.Fragment>
        and another link to
        <InlineLinkShortCode
          data={{
            code: 'link',
            original: '[link path="/" label="Home"]',
            params: { label: 'Home', path: '/' }
          }}
        />
      </React.Fragment>
    )
  })
  it('should return renderHTML data if no codes exist', () => {
    expect(renderShortcodes(data.withoutCode)).toEqual(
      renderHTML(data.withoutCode)
    )
  })
})

describe('replace shortcodes', () => {
  it('should replace shortcodes with the correct JSX', () => {
    expect(replaceShortCodes(data.codes, data.withCode, 0, null)).toEqual(
      <React.Fragment>
        <p>this is content with a </p>
        <InlineLinkShortCode
          data={{
            code: 'link',
            original: '[link path="/about" label="About"]',
            params: { label: 'About', path: '/about' }
          }}
        />
      </React.Fragment>
    )
  })
})
