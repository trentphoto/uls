import { PostState } from '../modules/ducks/posts/types'
import { PageState } from '../modules/ducks/pages/types'

declare interface ReduxState {
  posts: PostState
  pages: PageState
}
