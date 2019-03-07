import React from 'react'
import { withSEO, withCurrentRoute } from '../../utils/hocs'
import { Hero, Sidebar, Footer, Loader, Content } from '../../components'
import { RouteComponentProps } from 'react-router'
import { ReduxState } from '../../types/redux'
import { ILink } from '../../components/Footer/metaData'
import { siteBase } from '../../config'

interface Props extends RouteComponentProps {
  page: ReduxState['pages']['currentRoute']
  getPage: (slug: string) => Promise<WPPage>
  getSubPages: (slug: string, pageID: number) => Promise<WPSubPage>
}

class SecondLevelDefault extends React.Component<Props> {
  setSubLinks = (pages: { [key: string]: WPSubPage } | undefined) => {
    if (pages) {
      const subpages: ILink[] = []

      for (const key in pages) {
        subpages.push({
          id: pages[key].slug,
          title: pages[key].title.rendered,
          path: `/${this.props.match.path.split('/')[1]}/${pages[key].slug}`
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
                image={siteBase + page.root.acf.background_image}
                overlay
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
                    <Sidebar data={this.setSubLinks(page.subpages)} />
                  </div>
                  <div className="col-md-8">
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

export default withCurrentRoute(
  withSEO(SecondLevelDefault, { title: 'Lvl 2 Page' })
)
