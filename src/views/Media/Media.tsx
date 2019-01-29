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
  <div className="media page">
    <Hero.WithImage {...metaData.hero} />
    <div className="page-wrapper">
      <Articles.ArticleGrid data={posts.data} pageAmount={3} />
    </div>
    <Footer />
  </div>
)

export default withPosts(withSEO(Media, { title: 'United Media' }))
