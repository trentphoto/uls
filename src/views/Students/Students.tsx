import React from 'react'
import { withSEO, withCurrentPage } from '../../utils/hocs'
import {
  Hero,
  Sidebar,
  //   Header,
  Text,
  Footer,
  Loader
} from '../../components'
import { RouteComponentProps } from 'react-router'
import { ReduxState } from '../../types/redux'
import { ILink } from '../../components/Footer/metaData'
import { siteBase } from '../../config'

interface Props extends RouteComponentProps {
  page: ReduxState['pages']['currentPage']
  getPage: (slug: string) => Promise<WPPage>
  getSubPages: (slug: string, pageID: number) => Promise<WPSubPage>
}

class Students extends React.Component<Props> {
  setSubLinks = (pages: { [key: string]: WPSubPage } | undefined) => {
    if (pages) {
      const subpages: ILink[] = []
      for (const key in pages) {
        subpages.push({
          title: pages[key].title.rendered,
          path: `students/${pages[key].slug}`
        })
      }
      return subpages
    }
    return []
  }

  public render() {
    const { page } = this.props

    return (
      <div className="about page">
        {page && page.data ? (
          <React.Fragment>
            {page.data.acf.background_image ? (
              <Hero.WithImage
                header={page.data.title.rendered}
                subHeader={page.data.acf.sub_header}
                image={siteBase + page.data.acf.background_image.sizes.large}
              />
            ) : (
              <Hero.NoImage
                header={page.data.title.rendered}
                subHeader={page.data.acf.sub_header}
              />
            )}

            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 mb-5">
                    <Sidebar data={this.setSubLinks(page.subpages)} />
                  </div>
                  <div className="col-md-8" id="content">
                    {/* <Header colored type="h2">
                      header here
                    </Header> */}
                    <Text size="medium" color="black">
                      {page.data.content.rendered}
                    </Text>
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

export default withCurrentPage(withSEO(Students, { title: 'Students' }))
