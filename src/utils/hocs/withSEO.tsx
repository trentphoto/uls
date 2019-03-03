import React from 'react'
import * as _ from 'lodash'
import renderHTML from 'react-render-html'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'
import { RouteComponentProps } from 'react-router'

interface SEO {
  title?: string
}

interface Props extends RouteComponentProps {
  pages: ReduxState['pages']['allPages']
}

const setTitle = (title: WPPage | null) => {
  const rest =
    'United Lutheran Seminary | Unifying, Learning, Serving | Pennsylvania'
  if (!title) {
    return rest
  }
  return renderHTML(`${title.title.rendered} | ${rest}`)
}

const ogImage = `https://clients.udioventures.com/seton/wp-content/uploads/sites/6/2018/12/home-hero-1920x953.jpg`
const website = 'https://unitedlutheranseminary.edu'
const desc = `As a premier graduate professional school, United Lutheran Seminary offers theological education and leadership formation that is both academically rigorous and practically oriented.`

const data = (page: WPPage | null, seo?: SEO) => (
  <Helmet>
    <title>{setTitle(page)}</title>
    <meta name="description" content={desc} />
    <link rel="canonical" href={website} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={setTitle(page)} />
    <meta property="og:description" content={desc} />
    <meta property="og:url" content={website} />
    <meta property="og:site_name" content="ULS" />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:secure_url" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:title" content={setTitle(page)} />
    <meta name="twitter:site" content="@uls" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:creator" content="@uls" />
  </Helmet>
)

const withSEO = (WrappedComponent: any, seo?: SEO) => {
  // ...and returns another component...
  class Wrapper extends React.Component<Props> {
    // componentDidUpdate(prevProps: Props) {
    //   if (!_.isEqual(prevProps.pages, this.props.pages)) {
    //     console.log('here')
    //     this.forceUpdate()
    //   }
    // }
    render() {
      const { match, pages } = this.props
      const slug = match.url.split('/').pop() as string
      let metadata = null
      if (Object.keys(pages).length > 1 && this.props.pages[slug]) {
        metadata = this.props.pages[slug].data
      }
      return (
        <React.Fragment>
          {data(metadata, seo)}
          <WrappedComponent {...this.props} />
        </React.Fragment>
      )
    }
  }

  const mapStateToProps = (state: ReduxState) => ({
    pages: state.pages.allPages
  })

  return connect(mapStateToProps)(Wrapper)
}

export default withSEO
