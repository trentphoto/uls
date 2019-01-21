import React from 'react'
import './Media-post.css'
import { withSEO, withPosts } from '../../utils/hocs'
import { Hero, Footer, Loader } from '../../components'
import { RouteComponentProps } from 'react-router'
import { ReduxState } from '../../types/redux'
import Content from './Content'

interface Props extends RouteComponentProps<{ slug: string }> {
  posts: ReduxState['posts']['all']
  getPosts: () => Promise<WPPost[]>
}

const MediaPost = ({ posts, match }: Props) => {
  const renderHero = (data: WPPost) => {
    return data.acf.thumbnail_image ? (
      <div className="heading">
        <img
          src={data.acf.thumbnail_image.sizes.large}
          alt={data.acf.thumbnail_image.name}
        />
      </div>
    ) : (
      <Hero.NoImage header={data.title.rendered} />
    )
  }
  return (
    <div className="media-post page">
      {!posts.loading && !posts.error ? (
        <React.Fragment>
          {renderHero(posts.data[match.params.slug])}
          <div className="page-wrapper flex top">
            <Content data={posts.data[match.params.slug]} />
          </div>
          <Footer />
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default withPosts(withSEO(MediaPost, { title: 'Post' }))
