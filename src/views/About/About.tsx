import React from 'react'
import './About.css'
import Helmet from 'react-helmet'

class About extends React.Component {
  public render() {
    return (
      <div className="about page">
        <Helmet>
          <title>About</title>
        </Helmet>
        <h1>About Page</h1>
        <p>I'm the about page.</p>
      </div>
    )
  }
}

export default About
