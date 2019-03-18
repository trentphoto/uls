import React from 'react'
import renderShortcodes from '../../utils/shortcodes'

interface Props {
  data: string
}

const Content = ({ data }: Props) => {
  const content = `[link path="/about" label="About"] ${data} [link path="/" label="Home"]`

  return (
    <>
      <div id="content">{renderShortcodes(content)}</div>
    </>
  )
}

export default Content
