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
    setPage: (page: WPPage, pages: ReduxState['pages']['allPages']) => void
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

      const slug = match.url.split('/')[1]
      if (Object.keys(pages).length !== 0 && pages[slug]) {
        if (currentPage.data && currentPage.data.slug !== slug) {
          setPage(pages[slug].data as WPPage, pages)
        } else if (currentPage.data === null) {
          setPage(pages[slug].data as WPPage, pages)
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
    setPage: (page: WPPage, pages: ReduxState['pages']['allPages']) =>
      setCurrentPage(page, pages)(dispatch)
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithCurrentPage)
}
