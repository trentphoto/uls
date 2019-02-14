import { createAction } from '../../utils/createAction'
import { ActionsUnion } from '../../utils/types'
import * as types from './types'

const pages = {
  fetchAllPagesRequest: () => createAction(types.FETCH_ALL_PAGES_REQUEST),
  fetchAllPagesSuccess: (pages: WPPage[]) =>
    createAction(types.FETCH_ALL_PAGES_SUCCESS, { pages }),
  fetchAllPagesFail: (error: string) =>
    createAction(types.FETCH_ALL_PAGES_FAIL, { error }),
  setSubPages: (subpages: WPThirdLevel[]) =>
    createAction(types.SET_SUBPAGES, { subpages }),
  setPage: (page: WPPage) => createAction(types.SET_PAGE, { page })
}

export const Actions = {
  ...pages
}

export type Actions = ActionsUnion<typeof Actions>
