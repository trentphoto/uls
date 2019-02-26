import React from 'react'
import './About.css'
import { withSEO, withCurrentRoute } from '../../utils/hocs'
import {
  Hero,
  Sidebar,
  Header,
  FactsCard,
  CampusesSection,
  Footer,
  Loader,
  Departments,
  President,
  Buttons,
  Content
} from '../../components'
import { metaData } from './metaData'
import { RouteComponentProps } from 'react-router'
import { ReduxState } from '../../types/redux'
import { ILink } from '../../components/Footer/metaData'
import { siteBase } from '../../config'

interface Props extends RouteComponentProps {
  page: ReduxState['pages']['currentRoute']
  getPage: (slug: string) => Promise<WPPage>
  getSubPages: (slug: string, pageID: number) => Promise<WPSubPage>
}

class About extends React.Component<Props> {
  setSubLinks = (pages: { [key: string]: WPSubPage } | undefined) => {
    if (pages) {
      const subpages: ILink[] = []
      for (const key in pages) {
        subpages.push({
          id: pages[key].slug,
          title: pages[key].title.rendered,
          path: `about/${pages[key].slug}`
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
        {page && page.root ? (
          <React.Fragment>
            {page.root.acf.background_image ? (
              <Hero.WithImage
                header={page.root.title.rendered}
                subHeader={page.root.acf.sub_header}
                image={siteBase + page.root.acf.background_image.sizes.large}
              />
            ) : (
              <Hero.NoImage
                header={page.root.title.rendered}
                subHeader={page.root.acf.sub_header}
              />
            )}

            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 mb-5">
                    <Sidebar />
                  </div>
                  <div className="col-md-8">
                    <Content data={page.root.content.rendered} />
                  </div>
                </div>
              </div>
            </section>

            <FactsCard {...metaData.facts} colored />
            <CampusesSection data={metaData.campuses} />
            <Departments data={metaData.departments} />
            <President data={metaData.president} />
            <div className="block">
              <img src={metaData.tradition.image} alt="Tradition" />
              <div className="content">
                <Header type="h2">{metaData.tradition.header}</Header>
                <Buttons.Outline isLink size="large">
                  READ MORE
                </Buttons.Outline>
              </div>
            </div>
            <Footer />
          </React.Fragment>
        ) : (
          <Loader />
        )}
      </div>
    )
  }
}

export default withCurrentRoute(withSEO(About, { title: 'About' }))
