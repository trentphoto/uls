import React from 'react'
import './Calendar.css'
import { RouteComponentProps } from 'react-router'
import { ReduxState } from '../../types/redux'

import { withSEO, withCurrentRoute } from '../../utils/hocs'

import {
  Sidebar,
  Header,
  Loader,
  Content,
  Footer,
  Calendar
} from '../../components'

interface Props extends RouteComponentProps {
  page: ReduxState['pages']['currentRoute']
}

class CalendarPage extends React.Component<Props> {
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
            <section className="py-5">
              <div className="container">
                <Calendar />
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

export default withCurrentRoute(
  withSEO(CalendarPage, { title: 'Community Life' })
)
