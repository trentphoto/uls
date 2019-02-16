import React from 'react'
import renderHTML from 'react-render-html'

interface Props {
  data: string
}

const Content = ({ data }: Props) => {
  return (
    <>
      <div id="content">{renderHTML(data)}</div>
    </>
  )
}

export default Content
