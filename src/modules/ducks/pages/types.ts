export const FETCH_PAGE_REQUEST = '@@posts/FETCH_PAGE_REQUEST'
export const FETCH_PAGE_FAIL = '@@posts/FETCH_PAGE_FAIL'
export const FETCH_PAGE_SUCCESS = '@@posts/FETCH_PAGE_SUCCESS'

export const FETCH_SUBPAGES_REQUEST = '@@posts/FETCH_SUBPAGES_REQUEST'
export const FETCH_SUBPAGES_FAIL = '@@posts/FETCH_SUBPAGES_FAIL'
export const FETCH_SUBPAGES_SUCCESS = '@@posts/FETCH_SUBPAGES_SUCCESS'

export interface PageState {
  [key: string]: {
    loading: boolean
    error: string | null
    data: WPPage | null
    subpages: {
      [key: string]: WPThirdLevel
    }
  }
}
