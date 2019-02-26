import React from 'react'
import { ReduxState } from '../../types/redux'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { setCurrentPage } from '../../modules/ducks/pages/operations'
import { RouteComponentProps } from 'react-router'

export const withCurrentPage = (WrappedComponent: any) => {
  interface Props extends RouteComponentProps<{}> {
    pages: ReduxState['pages']['allPages']
    currentPage: ReduxState['pages']['currentPage']
    setPage: (
      page: WPPage,
      pages: ReduxState['pages']['allPages'],
      slug: string[]
    ) => void
  }

  class WithCurrentPage extends React.Component<Props> {
    componentDidMount = () => {
      this.updateCurrentPage()
    }

    componentDidUpdate(prevProps: Props) {
      this.updateCurrentPage()
    }

    updateCurrentPage = () => {
      const { match, currentPage, pages, setPage } = this.props
      // used to get parent route

      const slug = match.url.split('/')
      console.log(slug)
      if (Object.keys(pages).length !== 0 && pages[slug[1]]) {
        if (currentPage.data && currentPage.data.slug !== slug[1]) {
          setPage(pages[slug[1]].data as WPPage, pages, slug)
        } else if (currentPage.data === null) {
          setPage(pages[slug[1]].data as WPPage, pages, slug)
        }
      }
    }

    render() {
      return <WrappedComponent page={this.props.currentPage} {...this.props} />
    }
  }

  const mapStateToProps = (state: ReduxState) => ({
    pages: state.pages.allPages,
    currentPage: state.pages.currentPage
  })

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    setPage: (
      page: WPPage,
      pages: ReduxState['pages']['allPages'],
      slug: string[]
    ) => setCurrentPage(page, pages, slug)(dispatch)
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithCurrentPage)
}
