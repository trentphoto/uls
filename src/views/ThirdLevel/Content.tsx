import React from 'react'
import renderHTML from 'react-render-html'
import { Header } from '../../components'

interface Props {
  data: WPThirdLevel
}

const Content = ({ data }: Props) => {
  return (
    <div id="content">
      <Header colored type="h2">
        {data.title.rendered}
      </Header>
      {renderHTML(data.content.rendered)}
    </div>
  )
}

export default Content
