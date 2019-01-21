import React from 'react'
import renderHTML from 'react-render-html'
import { Header, Text } from '../../components'

interface Props {
  data: WPPost
}

const Content = ({ data }: Props) => {
  return (
    <div id="content">
      <Text size="medium" color="grey">
        {data.date}
      </Text>
      <Header colored type="h2">
        {data.title.rendered}
      </Header>
      <div className="divider" />
      {renderHTML(data.content.rendered)}
    </div>
  )
}

export default Content
