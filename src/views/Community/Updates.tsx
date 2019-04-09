import React from 'react'
import { RouteComponentProps } from 'react-router'
import { ReduxState } from '../../types/redux'

import { withSEO, withCurrentRoute } from '../../utils/hocs'

import { Sidebar, Header, Loader, Content, Footer } from '../../components'

interface Props extends RouteComponentProps {
  pages: ReduxState['pages']['allPages']
}

class Calendar extends React.Component<Props> {
  public render() {
    const { pages, match } = this.props

    // const slug = ma
    const slug = match.url.split('/').pop() as string
    const page = pages[slug]
    return (
      <div className="admissions page">
        {page && page.data ? (
          <React.Fragment>
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 mb-5">
                    <Sidebar />
                  </div>
                  <div className="col-md-8">
                    <Header colored type="h2">
                      {page.data.title.rendered}
                    </Header>
                    <Content data={page.data.content.rendered} />
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

export default withCurrentRoute(withSEO(Calendar, { title: 'Community Life' }))
