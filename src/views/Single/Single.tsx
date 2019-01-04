import React from 'react'
import Helmet from 'react-helmet'
import { fetchAllPosts } from '../../modules/ducks/posts/operations'
import renderHTML from 'react-render-html'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'

interface Props {
  posts: ReduxState['posts']['allPosts']
  post: ReduxState['posts']['post']
  fetchPosts: () => Promise<void>
}

class Single extends React.Component<Props> {
  public componentDidMount() {
    // if data isn't loaded yet, fetch it and load it into redux store
    const { posts, fetchPosts } = this.props
    if (posts.data.length === 0) {
      fetchPosts()
    }
  }

  render() {
    return (
      <div className="about page">
        <Helmet>
          <title>Single Post</title>
        </Helmet>
        <h1>
          {renderHTML(this.props.post ? this.props.post.title.rendered : '')}
        </h1>
        <React.Fragment>
          {renderHTML(this.props.post ? this.props.post.content.rendered : '')}
        </React.Fragment>
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState, ownProps: any) => ({
  posts: state.posts.allPosts,
  post: state.posts.allPosts.data.filter(
    i => i.slug === ownProps.match.params.slug
  )[0]
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchPosts: () => fetchAllPosts()(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Single)
