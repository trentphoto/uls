import React from 'react'
import { ReduxState } from '../../types/redux'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { fetchAllPages } from '../../modules/ducks/pages/operations'
import { withRouter, RouteComponentProps } from 'react-router'

export const withPages = (WrappedComponent: any) => {
  interface Props extends RouteComponentProps {
    pages: ReduxState['pages']['allPages']
    getPages: () => Promise<WPPage[]>
  }

  class WithPages extends React.Component<Props> {
    async componentDidMount() {
      const { pages, getPages } = this.props
      // There is a sample page already in this object
      // so length will be 1 not 0
      if (Object.keys(pages).length === 1) {
        await getPages()
      }
    }

    render() {
      return <WrappedComponent pages={this.props.pages} {...this.props} />
    }
  }

  const mapStateToProps = (state: ReduxState) => ({
    pages: state.pages.allPages
  })

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    getPages: () => fetchAllPages()(dispatch)
  })

  return withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(WithPages)
  )
}
