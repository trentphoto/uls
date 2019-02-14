export const FETCH_ALL_PAGES_REQUEST = '@@pages/FETCH_ALL_PAGES_REQUEST'
export const FETCH_ALL_PAGES_FAIL = '@@pages/FETCH_ALL_PAGES_FAIL'
export const FETCH_ALL_PAGES_SUCCESS = '@@pages/FETCH_ALL_PAGES_SUCCESS'

export const SET_PAGE = '@@pages/SET_PAGE'
export const SET_SUBPAGES = '@@pages/SET_SUBPAGES'

export interface PageState {
  currentPage: {
    data: WPPage | null
    subpages: {
      [key: string]: WPThirdLevel
    }
  }
  allPages: {
    [key: string]: {
      loading: boolean
      error: string | null
      data: WPPage | null
      subpages: {
        [key: string]: WPThirdLevel
      }
    }
  }
  loading: boolean
  error: string | null
}
