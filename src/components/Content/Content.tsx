import React from 'react'
import renderShortcodes from '../../utils/shortcodes'

interface Props {
  data: string
}

const Content = ({ data }: Props) => {
  /**
   * ONLY AN EXAMPLE
   *
   * Remove once in production
   */
  // const content = `[button path="/admissions" label="Admissions"] ${data} [link path="/" label="Home"]`

  // console.log(data)
  return (
    <>
      <div id="content">{renderShortcodes(data)}</div>
    </>
  )
}

export default Content
