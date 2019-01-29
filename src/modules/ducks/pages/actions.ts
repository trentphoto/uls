import { createAction } from '../../utils/createAction'
import { ActionsUnion } from '../../utils/types'
import * as types from './types'

const fetchPage = {
  fetchPageRequest: (slug: string) =>
    createAction(types.FETCH_PAGE_REQUEST, { slug }),
  fetchPageSuccess: (page: WPPage) =>
    createAction(types.FETCH_PAGE_SUCCESS, { page }),
  fetchPageFail: (slug: string, error: string) =>
    createAction(types.FETCH_PAGE_FAIL, { error, slug })
}

const fetchSubPages = {
  fetchSubPagesRequest: (slug: string) =>
    createAction(types.FETCH_SUBPAGES_REQUEST, { slug }),
  fetchSubPagesSuccess: (slug: string, pages: WPThirdLevel[]) =>
    createAction(types.FETCH_SUBPAGES_SUCCESS, { slug, pages }),
  fetchSubPagesFail: (slug: string, error: string) =>
    createAction(types.FETCH_SUBPAGES_FAIL, { error, slug })
}

export const Actions = {
  ...fetchPage,
  ...fetchSubPages
}

export type Actions = ActionsUnion<typeof Actions>
