import React from 'react'
import Helmet from 'react-helmet'
import renderHTML from 'react-render-html'
import { Link } from 'react-router-dom'

import './Blog.css'
import { fetchAllPosts } from '../../modules/ducks/posts/operations'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

interface Props {
  posts: ReduxState['posts']['allPosts']
  fetchPosts: () => Promise<void>
}

class Blog extends React.Component<Props> {
  public componentDidMount() {
    const { posts, fetchPosts } = this.props
    if (posts.data.length === 0) {
      fetchPosts()
    }
  }

  public render() {
    return (
      <div className="blog page">
        <Helmet>
          <title>Blog</title>
        </Helmet>
        <h1>Blog</h1>

        {this.props.posts.data.map((post: WPPost) => (
          <div key={post.id} style={{ maxWidth: '720px' }}>
            <h1>{renderHTML(post.title.rendered)}</h1>
            <React.Fragment>
              {renderHTML(post.content.rendered.substring(0, 100))}...
            </React.Fragment>
            <p>
              Link:{' '}
              <Link to={`/blog/${post.slug}`}>Click here to read more.</Link>
            </p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => ({
  posts: state.posts.allPosts
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPosts: () => fetchAllPosts()(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog)
