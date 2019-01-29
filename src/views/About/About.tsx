import React from 'react'
import './About.css'
import { withSEO } from '../../utils/hocs'
import {
  Hero,
  Sidebar,
  Header,
  Text,
  FactsCard,
  CampusesSection,
  Footer,
  Loader,
  Departments,
  President,
  Buttons
} from '../../components'
import { metaData } from './metaData'
import { RouteComponentProps } from 'react-router'
import { ReduxState } from '../../types/redux'
import { Dispatch } from 'redux'
import { fetchPage, fetchSubPages } from '../../modules/ducks/pages/operations'
import { connect } from 'react-redux'
import { ILink } from '../../components/Footer/metaData'

interface Props extends RouteComponentProps {
  pages: ReduxState['pages']
  getPage: (slug: string) => Promise<WPPage>
  getSubPages: (slug: string, pageID: number) => Promise<WPThirdLevel>
}

class About extends React.Component<Props> {
  async componentWillMount() {
    const { match, getPage, getSubPages, pages } = this.props
    const slug = match.path.replace('/', '')
    if (!pages[slug]) {
      const page = await getPage(slug)
      await getSubPages(slug, page.id)
    }
  }

  setSubLinks = (pages: { [key: string]: WPThirdLevel } | undefined) => {
    if (pages) {
      const subpages: ILink[] = []
      for (const key in pages) {
        subpages.push({
          title: pages[key].title.rendered,
          path: `about/${pages[key].slug}`
        })
      }
      return subpages
    }
    return []
  }

  public render() {
    const { match, pages } = this.props

    const slug = match.path.replace('/', '')
    const page = pages[slug]

    return (
      <div className="about page">
        {page && !page.loading ? (
          <React.Fragment>
            <Hero.WithImage {...metaData.hero} />
            <div className="page-wrapper flex top">
              <Sidebar data={this.setSubLinks(page.subpages)} />
              <div id="content">
                <Header colored type="h2">
                  {metaData.content.header}
                </Header>
                <Text size="medium" color="black">
                  {metaData.content.text}
                </Text>
              </div>
            </div>
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

const mapStateToProps = (state: ReduxState) => ({
  pages: state.pages
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getPage: (slug: string) => fetchPage(slug)(dispatch),
  getSubPages: (slug: string, pageID: number) =>
    fetchSubPages(slug, pageID)(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSEO(About, { title: 'About' }))
