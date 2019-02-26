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

export const setCurrentPage = (
  page: WPPage,
  pages: PageState['allPages'],
  slug: string[]
) => (dispatch: Dispatch) => {
  dispatch(Actions.setPage(page))

  interface Pages {
    [key: string]: WPSubPage
  }
  let pageData = {}

  const getSubpages = (parent: number, slug: string) => {
    let page: WPSubPage = { ...(pages[slug].data as WPPage), subpages: {} }
    for (const key in pages) {
      const data = pages[key].data
      if (data && data.parent === parent) {
        page = {
          ...page,
          subpages: { ...page.subpages, [data.slug]: data as WPSubPage }
        }
      }
    }
    pageData = { ...pageData, [slug]: page }
    if (Object.keys(page.subpages).length !== 0) {
      for (const key in page.subpages) {
        getSubpages(page.subpages[key].id, page.subpages[key].slug)
      }
    }
  }
  getSubpages(page.id, page.slug)

  let subpages: Pages = {}

  const setSubpages = (pages: Pages, slug: string) => {
    const firstDict = pages[slug].subpages
    if (Object.keys(firstDict).length !== 0) {
      for (const key in firstDict) {
        const secondDict = pages[key].subpages
        if (Object.keys(secondDict).length !== 0) {
          for (const keyTwo in secondDict) {
            const thirdDict = pages[keyTwo].subpages
            if (Object.keys(thirdDict).length !== 0) {
              for (const keyThree in thirdDict) {
                subpages = {
                  ...subpages,
                  [key]: {
                    ...pages[key],
                    subpages: {
                      ...pages[key].subpages,
                      [keyTwo]: {
                        ...pages[keyTwo],
                        subpages: {
                          ...pages[keyTwo].subpages,
                          [keyThree]: pages[keyThree]
                        }
                      }
                    }
                  }
                }
              }
            } else {
              subpages = {
                ...subpages,
                [key]: {
                  ...pages[key],
                  subpages: { ...pages[key].subpages, [keyTwo]: pages[keyTwo] }
                }
              }
            }
          }
        } else {
          subpages = {
            ...subpages,
            [key]: { ...pages[key], subpages: pages[key].subpages }
          }
        }
      }
    }
  }
  setSubpages(pageData, page.slug)
  dispatch(Actions.setSubPages(subpages))
}
