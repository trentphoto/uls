import { combineReducers } from 'redux'
import * as types from './types'
import * as fromActions from './actions'

const initialState: types.PostState = {
  all: {
    error: null,
    loading: true,
    data: {}
  }
}

const all = (
  state: types.PostState['all'] = initialState.all,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.FETCH_ALL_POSTS_REQUEST:
      return { error: null, loading: true, data: {} }
    case types.FETCH_ALL_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.posts.reduce(
          (map: { [key: string]: WPPost }, post: WPPost) => {
            map[post.slug] = post
            return map
          },
          {}
        )
      }
    case types.FETCH_ALL_POSTS_FAIL:
      return { ...state, loading: false, error: action.payload.error }
    default: {
      return state
    }
  }
}

export default combineReducers({ all })
