import React from 'react'
import renderHTML from 'react-render-html'
import { Header, Text } from '../../components'
import moment from 'moment'

interface Props {
  data: WPPost
}

const Content = ({ data }: Props) => {
  return (
    <div id="content">
      <Text size="medium" color="grey">
        {moment(data.date).format('MMMM Do YYYY')}
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
