import React from 'react'
import { Header, Text, Buttons } from '..'
import './articles.css'
import { withRouter, RouteComponentProps } from 'react-router'
import moment from 'moment'

interface Props extends RouteComponentProps {
  data: WPPost
}
const placeholder = require('../../assets/placeholders/blog/blog-2.jpg')
const Article = ({ data, history }: Props) => {
  return (
    <div
      className="article"
      onClick={() => history.push(`/united-media/${data.slug}`)}
    >
      <div className="img-wrapper">
        {data.acf.thumbnail_image ? (
          <img
            src={data.acf.thumbnail_image.sizes.large}
            alt={data.acf.thumbnail_image.name}
          />
        ) : (
          <img src={placeholder} alt="Placeholder" />
        )}
      </div>
      <div className="content-container">
        <div className="upper">
          <Text weight="bold" size="extra-small" color="black">
            {moment(data.date).format('MMMM Do YYYY')}
          </Text>
          <div className="divider" />
          <Header colored type="h3">
            {data.title.rendered}
          </Header>
        </div>
        <Buttons.NoOutline>Read More</Buttons.NoOutline>
      </div>
    </div>
  )
}

export default withRouter(Article)
