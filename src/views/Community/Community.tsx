import React from 'react'
import { RouteComponentProps } from 'react-router'
import { ReduxState } from '../../types/redux'

import { withSEO, withCurrentRoute } from '../../utils/hocs'

import { Sidebar, Header, Loader, Content, Footer } from '../../components'

interface Props extends RouteComponentProps {
  page: ReduxState['pages']['currentRoute']
}

class Community extends React.Component<Props> {
  public render() {
    const { page } = this.props

    return (
      <div className="admissions page">
        {page && page.root ? (
          <React.Fragment>
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 mb-5">
                    <Sidebar />
                  </div>
                  <div className="col-md-8">
                    <Header colored type="h2">
                      {page.root.title.rendered}
                    </Header>
                    <Content data={page.root.content.rendered} />
                  </div>
                </div>
              </div>
            </section>
            <Footer />
          </React.Fragment>
        ) : (
          <Loader />
        )}
      </div>
    )
  }
}

export default withCurrentRoute(withSEO(Community, { title: 'Community Life' }))
