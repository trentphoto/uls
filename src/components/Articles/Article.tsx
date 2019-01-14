import React from 'react'
import { Header, Text, Buttons } from '..'
import './articles.css'

interface Props {
  data: IArticle
}

const Article = ({ data }: Props) => {
  return (
    <div className="article">
      <div className="img-wrapper">
        <img src={data.image} alt={data.url} />
      </div>
      <div className="content-container">
        <div className="upper">
          <Text weight="bold" size="extra-small" color="black">
            {data.date}
          </Text>
          <div className="divider" />
          <Header colored type="h3">
            {data.title}
          </Header>
        </div>
        <Buttons.NoOutline>Read More</Buttons.NoOutline>
      </div>
    </div>
  )
}

export default Article
