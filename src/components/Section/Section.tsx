import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Section.css'

class Section extends React.Component {
  render() {
    const { children } = this.props
    return (
      <section className="Section">
        <div className="container">
          <div className="row">
            <div className="col">{children}</div>
          </div>
        </div>
      </section>
    )
  }
}

export default Section
