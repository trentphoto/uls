import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router'

interface Props extends RouteComponentProps {
  children: any
}

class ScrollToTop extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    // if the page changed
    if (this.props.location !== prevProps.location) {
      const doc = document.documentElement
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      // if we're scrolled more than 300px
      if (top > 550) {
        // window.scrollTo(0, 0)
      }
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
