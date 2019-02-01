import React from 'react'
import { RouteComponentProps } from 'react-router'
import { ILink } from '../../components/Footer/metaData'
import { ReduxState } from '../../types/redux'
import { connect } from 'react-redux'
import { withSEO } from '../../utils/hocs'
import { Dispatch } from 'redux'
import { fetchPage, fetchSubPages } from '../../modules/ducks/pages/operations'
import { metaData } from './metaData'

import {
  Hero,
  Sidebar,
  Header,
  Loader,
  Text,
  FactsCard,
  Section
} from '../../components'
import './Admissions.css'

interface Props extends RouteComponentProps {
  pages: ReduxState['pages']
  getPage: (slug: string) => Promise<WPPage>
  getSubPages: (slug: string, pageID: number) => Promise<WPThirdLevel>
}

class Admissions extends React.Component<Props> {
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
          path: `admissions/${pages[key].slug}`
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
      <div className="admissions page">
        {page && !page.loading ? (
          <React.Fragment>
            <Hero.WithImage {...metaData.hero} />
            <Section>
              <div className="page-wrapper flex top">
                <Sidebar data={this.setSubLinks(page.subpages)} />
                <div id="content">
                  <Header colored type="h2">
                    Welcome to ULS Admissions
                  </Header>
                  <Text size="medium" color="black">
                    Hello world.
                  </Text>
                </div>
              </div>
            </Section>
            <FactsCard {...metaData.facts} colored />
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
)(withSEO(Admissions, { title: 'Admissions' }))
