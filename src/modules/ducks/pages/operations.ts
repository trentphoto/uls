import api from '../../api'
import { Actions } from './actions'
import { Dispatch } from 'redux'
import { PageState } from './types'

export const fetchAllPages = () => async (dispatch: Dispatch) => {
  try {
    dispatch(Actions.fetchAllPagesRequest())
    const pages = await api.wp.getAllPages()
    dispatch(Actions.fetchAllPagesSuccess(pages))
    return pages
  } catch (error) {
    dispatch(Actions.fetchAllPagesFail(error))
    return error
  }
}

export const setCurrentPage = (page: WPPage, pages: PageState['allPages']) => (
  dispatch: Dispatch
) => {
  dispatch(Actions.setPage(page))
  const subpages = []
  for (const key in pages) {
    const data: any = pages[key].data
    if (data) {
      if (data.parent === page.id) {
        subpages.push(data as WPThirdLevel)
      }
    }
  }
  dispatch(Actions.setSubPages(subpages))
}
