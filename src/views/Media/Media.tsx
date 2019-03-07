import React from 'react'
import { withSEO, withPosts } from '../../utils/hocs'
import { Hero, Articles, Footer } from '../../components'
import { metaData } from './metaData'
import { ReduxState } from '../../types/redux'

import './Media.css'

interface Props {
  posts: ReduxState['posts']['all']
}

const Media = ({ posts }: Props) => (
  <div className="media-page page">
    <Hero.WithImage {...metaData.hero} overlay />
    {Object.keys(posts.data).length !== 0 && (
      <div className="page-wrapper">
        <Articles.ArticleSlider data={posts.data} />
        <Articles.ArticleGrid data={posts.data} pageAmount={3} />
      </div>
    )}
    <Footer />
  </div>
)

export default withPosts(withSEO(Media, { title: 'United Media' }))
