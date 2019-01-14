import React from 'react'
import { Header } from '..'
import ArticleGrid from './ArticleGrid'

interface Props {
  /**
   * Number of articles to be present in the grid.
   * -1 for all articles
   * */
  pageAmount: number
  data: IArticle[]
}

const Preview = ({ pageAmount, data }: Props) => {
  return (
    <div className="articles-preview">
      <div className="page-wrapper">
        <Header type="h1" colored>
          Recent News
        </Header>
        <ArticleGrid pageAmount={pageAmount} data={data} />
      </div>
    </div>
  )
}

export default Preview
