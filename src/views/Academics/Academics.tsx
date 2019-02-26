import React from 'react'
import { RouteComponentProps } from 'react-router'
import { ILink } from '../../components/Footer/metaData'
import { ReduxState } from '../../types/redux'

import { withSEO, withCurrentPage } from '../../utils/hocs'

import { metaData } from './metaData'

import {
  Hero,
  Sidebar,
  Header,
  Loader,
  Content,
  Footer
} from '../../components'

interface Props extends RouteComponentProps {
  page: ReduxState['pages']['currentPage']
  // getPage: (slug: string) => Promise<WPPage>
  // getSubPages: (slug: string, pageID: number) => Promise<WPSubPage>
}

class Academics extends React.Component<Props> {
  setSubLinks = (pages: { [key: string]: WPSubPage } | undefined) => {
    if (pages) {
      const subpages: ILink[] = []
      for (const key in pages) {
        subpages.push({
          title: pages[key].title.rendered,
          path: `academics/${pages[key].slug}`
        })
      }
      return subpages
    }
    return []
  }

  public render() {
    const { page } = this.props
    console.log(this.props)

    // const slug = match.path.replace('/', '')
    // const page = pages[slug]

    return (
      <div className="admissions page">
        {page && page.data ? (
          <React.Fragment>
            <Hero.WithImage {...metaData.hero} />
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 mb-5">
                    <Sidebar data={this.setSubLinks(page.subpages)} />
                  </div>
                  <div className="col-md-8">
                    <Header colored type="h2">
                      Integrative. Experiential. Empowering.
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

export default withCurrentPage(withSEO(Academics, { title: 'Academics' }))
