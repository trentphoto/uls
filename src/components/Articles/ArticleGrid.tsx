import React from 'react'
import Article from './Article'

interface Props {
  /**
   * Number of articles to be present in the grid.
   * -1 for all articles
   * */
  pageAmount: number
  data: IArticle[]
}

const ArticleGrid = ({ data, pageAmount }: Props) => {
  return (
    <div className="articles">
      {data.slice(0, pageAmount).map((article: IArticle) => (
        <Article data={article} />
      ))}
    </div>
  )
}

export default ArticleGrid
