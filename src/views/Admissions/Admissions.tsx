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
  Buttons
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
            <section className="py-5 bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <Header colored type="h2">
                      Thinking About A Call to Ministry?
                    </Header>
                    <Text size="large" color="black">
                      Watch our free 5-part video series on Discerning Your
                      Call.
                    </Text>
                    You'll...
                    <ul>
                      <li>
                        Hear from 4 ULS students and 2 ordained staff members on
                        how they discerned their call process, and their advice
                        for you
                      </li>
                      <li>
                        Learn what to do when you first feel called to ministry
                      </li>
                      <li>Explore the next steps towards attending seminary</li>
                      <li>And more...</li>
                    </ul>
                    <Buttons.Outline size="large" color="white">
                      Watch Now
                    </Buttons.Outline>
                  </div>
                  <div className="col-md-6">
                    <iframe
                      width="540"
                      height="300"
                      src="https://www.youtube.com/embed/RDJrPQi9-qw?rel=0&amp;controls=0&amp;showinfo=0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 mb-5">
                    <Sidebar data={this.setSubLinks(page.subpages)} />
                  </div>
                  <div className="col-md-8">
                    <Header colored type="h2">
                      Welcome to ULS Admissions
                    </Header>
                    <Text size="medium" color="black">
                      Hello world.
                    </Text>
                  </div>
                </div>
              </div>
            </section>
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