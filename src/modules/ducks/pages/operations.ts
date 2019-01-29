import api from '../../api'
import { Actions } from './actions'
import { Dispatch } from 'redux'

export const fetchPage = (slug: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(Actions.fetchPageRequest(slug))
    const page = await api.wp.getPage(slug)
    dispatch(Actions.fetchPageSuccess(page))
    return page
  } catch (error) {
    dispatch(Actions.fetchPageFail(slug, error))
    return error
  }
}

export const fetchSubPages = (slug: string, pageID: number) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(Actions.fetchSubPagesRequest(slug))
    const pages = await api.wp.getSubPages(pageID)
    dispatch(Actions.fetchSubPagesSuccess(slug, pages))
  } catch (error) {
    dispatch(Actions.fetchSubPagesFail(slug, error))
    return error
  }
}
