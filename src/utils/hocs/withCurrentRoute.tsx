import React from 'react'
import { ReduxState } from '../../types/redux'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { setCurrentRoute } from '../../modules/ducks/pages/operations'
import { RouteComponentProps } from 'react-router'

export const withCurrentRoute = (WrappedComponent: any) => {
  interface Props extends RouteComponentProps<{}> {
    pages: ReduxState['pages']['allPages']
    currentRoute: ReduxState['pages']['currentRoute']
    setPage: (
      page: WPPage,
      pages: ReduxState['pages']['allPages'],
      slug: string[]
    ) => void
  }

  class WithCurrentRoute extends React.Component<Props> {
    componentDidMount = () => {
      this.updateCurrentRoute()
    }

    componentDidUpdate(prevProps: Props) {
      this.updateCurrentRoute()
    }

    updateCurrentRoute = () => {
      const { match, currentRoute, pages, setPage } = this.props
      // used to get parent route

      const slug = match.url.split('/')

      console.log(slug)
      if (Object.keys(pages).length !== 0 && pages[slug[1]]) {
        const page = pages[slug[1]].data

        if (currentRoute.root && currentRoute.root.slug !== slug[1]) {
          setPage(page as WPPage, pages, slug)
        } else if (currentRoute.root === null) {
          setPage(page as WPPage, pages, slug)
        }
      }
    }

    render() {
      return <WrappedComponent page={this.props.currentRoute} {...this.props} />
    }
  }

  const mapStateToProps = (state: ReduxState) => ({
    pages: state.pages.allPages,
    currentRoute: state.pages.currentRoute
  })

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    setPage: (
      page: WPPage,
      pages: ReduxState['pages']['allPages'],
      slug: string[]
    ) => setCurrentRoute(page, pages, slug)(dispatch)
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithCurrentRoute)
}
