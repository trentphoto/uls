import * as React from 'react'
import { Link } from 'react-router-dom'
import './404.css'
import Helmet from 'react-helmet'

const NotFound = () => (
  <div className="page not-found">
    <Helmet>
      <title>404 Nnot Found</title>
    </Helmet>
    <div className="content-container">
      <h1>404</h1>
      <h3>Page not Found</h3>
      <Link to="/">go back home</Link>
    </div>
  </div>
)

export default NotFound
