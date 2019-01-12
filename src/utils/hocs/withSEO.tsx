import React from 'react'
import Helmet from 'react-helmet'

interface SEO {
  title: string
}

const setTitle = (title: string) => {
  const rest =
    'United Lutheran Seminary | Unifying, Learning, Serving | Pennsylvania'
  if (title === 'Home') {
    return rest
  }
  return `${title} | ${rest}`
}

const ogImage = `https://clients.udioventures.com/seton/wp-content/uploads/sites/6/2018/12/home-hero-1920x953.jpg`
const website = 'https://unitedlutheranseminary.edu'
const desc = `As a premier graduate professional school, United Lutheran Seminary offers theological education and leadership formation that is both academically rigorous and practically oriented.`

const data = (seo: SEO) => (
  <Helmet>
    <title>{setTitle(seo.title)}</title>
    <meta name="description" content={desc} />
    <link rel="canonical" href={website} />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={setTitle(seo.title)} />
    <meta property="og:description" content={desc} />
    <meta property="og:url" content={website} />
    <meta property="og:site_name" content="ULS" />
    <meta property="og:image" content={ogImage} />
    <meta property="og:image:secure_url" content={ogImage} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:title" content={setTitle(seo.title)} />
    <meta name="twitter:site" content="@uls" />
    <meta name="twitter:image" content={ogImage} />
    <meta name="twitter:creator" content="@uls" />
  </Helmet>
)

const withSEO = (WrappedComponent: any, seo: SEO) => {
  // ...and returns another component...
  return class extends React.Component {
    render() {
      return (
        <React.Fragment>
          {data(seo)}
          <WrappedComponent {...this.props} />
        </React.Fragment>
      )
    }
  }
}

export default withSEO
