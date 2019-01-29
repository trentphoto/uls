// import { combineReducers } from 'redux'
import * as types from './types'
import * as fromActions from './actions'

const initialState: types.PageState = {
  sample: {
    error: null,
    loading: true,
    data: null,
    subpages: {}
  }
}

const pages = (
  state: types.PageState = initialState,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.FETCH_PAGE_REQUEST:
      return {
        ...state,
        [action.payload.slug]: {
          ...state[action.payload.slug],
          loading: true,
          error: null,
          data: null
        }
      }
    case types.FETCH_SUBPAGES_REQUEST:
      return {
        ...state,
        [action.payload.slug]: {
          ...state[action.payload.slug],
          loading: true,
          error: null
        }
      }
    case types.FETCH_PAGE_FAIL:
      return {
        ...state,
        [action.payload.slug]: {
          ...state[action.payload.slug],
          error: action.payload.error,
          loading: false
        }
      }
    case types.FETCH_SUBPAGES_FAIL:
      return {
        ...state,
        [action.payload.slug]: {
          ...state[action.payload.slug],
          error: action.payload.error,
          loading: false
        }
      }
    case types.FETCH_PAGE_SUCCESS:
      return {
        ...state,
        [action.payload.page.slug]: {
          ...state[action.payload.page.slug],
          data: action.payload.page,
          loading: false
        }
      }
    case types.FETCH_SUBPAGES_SUCCESS:
      return {
        ...state,
        [action.payload.slug]: {
          ...state[action.payload.slug],
          subpages: action.payload.pages.reduce(
            (map: { [key: string]: WPThirdLevel }, page: WPThirdLevel) => {
              map[page.slug] = page
              return map
            },
            {}
          ),
          loading: false
        }
      }
    default: {
      return state
    }
  }
}

export default pages
