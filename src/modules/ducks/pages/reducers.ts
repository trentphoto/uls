// import { combineReducers } from 'redux'
import * as types from './types'
import * as fromActions from './actions'

const initialState: types.PageState = {
  allPages: {
    sample: {
      error: null,
      loading: true,
      data: null,
      subpages: {}
    }
  },
  currentRoute: {
    root: null,
    subpages: {}
  },
  error: null,
  loading: true
}

const pages = (
  state: types.PageState = initialState,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.FETCH_ALL_PAGES_REQUEST:
      return {
        ...state,
        allPages: {},
        error: null,
        loading: true
      }
    case types.FETCH_ALL_PAGES_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    case types.FETCH_ALL_PAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        allPages: action.payload.pages.reduce(
          (map: { [key: string]: any }, page: WPPage) => {
            map[page.slug] = {
              data: page,
              error: null,
              loading: false,
              subpages: {}
            }
            return map
          },
          {}
        )
      }
    case types.SET_SUBPAGES:
      return {
        ...state,
        currentRoute: {
          ...state.currentRoute,
          subpages: action.payload.subpages
        }
      }
    case types.SET_PAGE:
      return {
        ...state,
        currentRoute: {
          ...state.currentRoute,
          root: action.payload.page
        }
      }
    default: {
      return state
    }
  }
}

export default pages
