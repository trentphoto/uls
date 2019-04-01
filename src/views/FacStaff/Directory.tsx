import React from 'react'
import { withSEO, withCurrentRoute } from '../../utils/hocs'
import {
  Hero,
  Sidebar,
  //   Header,
  Footer,
  Loader,
  Content
} from '../../components'
import { RouteComponentProps } from 'react-router'
import { ReduxState } from '../../types/redux'

interface Props extends RouteComponentProps {
  pages: ReduxState['pages']['allPages']
}

class Directory extends React.Component<Props> {
  public render() {
    const { pages, match } = this.props

    // const slug = ma
    const slug = match.url.split('/').pop() as string
    const page = pages[slug]

    return (
      <div className="page">
        {page && page.data ? (
          <React.Fragment>
            {page.data.acf.background_image ? (
              <Hero.WithImage
                header={page.data.title.rendered}
                subHeader={page.data.acf.sub_header}
                image={page.data.acf.background_image}
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
                    <Sidebar />
                  </div>
                  <div className="col-md-8">
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

export default withCurrentRoute(withSEO(Directory, { title: 'Directory' }))
