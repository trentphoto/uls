import React from 'react'
import './third-level.css'
import { withSEO, withCurrentPage } from '../../utils/hocs'
import { Hero, Sidebar, Footer, Loader } from '../../components'
import { RouteComponentProps } from 'react-router'
import { ReduxState } from '../../types/redux'
// import { Dispatch } from 'redux'
// import { fetchPage, fetchSubPages } from '../../modules/ducks/pages/operations'
// import { connect } from 'react-redux'
import Content from '../../components/Content/Content'
import { ILink } from '../../components/Footer/metaData'
import { siteBase } from '../../config'

interface Props extends RouteComponentProps<{ slug: string }> {
  page: ReduxState['pages']['currentPage']
  getPage: (slug: string) => Promise<WPPage>
  getSubPages: (slug: string, pageID: number) => Promise<WPThirdLevel>
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

  setSubLinks = (pages: { [key: string]: WPThirdLevel } | undefined) => {
    if (pages) {
      const subpages: ILink[] = []
      for (const key in pages) {
        subpages.push({
          title: pages[key].title.rendered,
          path: `${pages[key].slug}`
        })
      }
      return subpages
    }
    return []
  }

  renderHero = (data: WPThirdLevel) =>
    data.acf.background_image ? (
      <Hero.WithImage
        header={data.title.rendered}
        subHeader={data.acf.sub_header}
        image={siteBase + data.acf.background_image.sizes.large}
      />
    ) : (
      <Hero.NoImage
        header={data.title.rendered}
        subHeader={data.acf.sub_header}
      />
    )

  public render() {
    const { match, page } = this.props

    // const slug = match.url.split('/')[1]
    // const page = pages[slug]
    return (
      <div className="third-level page">
        {page && page.data ? (
          <React.Fragment>
            {this.renderHero(page.subpages[match.params.slug])}
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <Sidebar data={this.setSubLinks(page.subpages)} />
                  </div>
                  <div className="col-md-8">
                    <Content
                      data={page.subpages[match.params.slug].content.rendered}
                    />
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

export default withCurrentPage(withSEO(ThirdLevel, { title: 'ThirdLevel' }))
