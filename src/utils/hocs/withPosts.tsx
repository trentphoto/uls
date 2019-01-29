import React from 'react'
import { ReduxState } from '../../types/redux'
import { connect } from 'react-redux'
import { fetchAllPosts } from '../../modules/ducks/posts/operations'
import { Dispatch } from 'redux'

export const withPosts = (WrappedComponent: any) => {
  interface Props {
    posts: ReduxState['posts']['all']
    getPosts: () => Promise<WPPost[]>
  }

  class WithPosts extends React.Component<Props> {
    async componentDidMount() {
      const { posts, getPosts } = this.props
      if (Object.keys(posts.data).length === 0) {
        await getPosts()
      }
    }

    render() {
      return <WrappedComponent posts={this.props.posts} {...this.props} />
    }
  }

  const mapStateToProps = (state: ReduxState) => ({
    posts: state.posts.all
  })

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    getPosts: () => fetchAllPosts()(dispatch)
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithPosts)
}
