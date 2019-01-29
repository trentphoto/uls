import React from 'react'
import Article from './Article'

interface Props {
  /**
   * Number of articles to be present in the grid.
   * -1 for all articles
   * */
  pageAmount: number
  data: { [key: string]: WPPost }
}

const ArticleGrid = ({ data, pageAmount }: Props) => {
  const renderArticles = () => {
    const array: WPPost[] = []
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        array.push(data[key])
      }
    }
    return array
  }
  return (
    <div className="articles">
      {renderArticles()
        .slice(0, pageAmount)
        .map((article: WPPost) => (
          <Article key={article.slug} data={article} />
        ))}
    </div>
  )
}

export default ArticleGrid
