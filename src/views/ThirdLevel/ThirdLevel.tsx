import React from 'react'
import './third-level.css'
import { withSEO, withCurrentRoute } from '../../utils/hocs'
import { Hero, Sidebar, Footer, Loader, Content } from '../../components'
import { RouteComponentProps } from 'react-router'
import { ReduxState } from '../../types/redux'
// import { Dispatch } from 'redux'
// import { fetchPage, fetchSubPages } from '../../modules/ducks/pages/operations'
// import { connect } from 'react-redux'
// import Content from '../../components/Content/Content'
// import { ILink } from '../../components/Footer/metaData'
import { siteBase } from '../../config'

interface Props extends RouteComponentProps<{ slug: string }> {
  pages: ReduxState['pages']['allPages']
  getPage: (slug: string) => Promise<WPPage>
  getSubPages: (slug: string, pageID: number) => Promise<WPSubPage>
}

class ThirdLevel extends React.Component<Props> {
  async componentWillMount() {
    // const { match, getPage, getSubPages, pages } = this.props
    // const parent = match.url.split('/')[1]
    // if (!pages[parent]) {
    //   const page = await getPage(parent)
    //   await getSubPages(parent, page.id)
    // }
  }

  renderHero = (data: WPPage) =>
    data.acf.background_image ? (
      <Hero.WithImage
        header={data.title.rendered}
        subHeader={data.acf.sub_header}
        image={siteBase + data.acf.background_image}
      />
    ) : (
      <Hero.NoImage
        header={data.title.rendered}
        subHeader={data.acf.sub_header}
      />
    )

  public render() {
    const { pages, match } = this.props

    // const slug = ma
    const slug = match.url.split('/').pop() as string
    const page = pages[slug]
    return (
      <div className="third-level page">
        {page && page.data ? (
          <React.Fragment>
            {this.renderHero(page.data)}
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
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

// const mapStateToProps = (state: ReduxState) => ({
//   pages: state.pages
// })

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   getPage: (slug: string) => fetchPage(slug)(dispatch),
//   getSubPages: (slug: string, pageID: number) =>
//     fetchSubPages(slug, pageID)(dispatch)
// })

export default withCurrentRoute(withSEO(ThirdLevel, { title: 'ThirdLevel' }))
