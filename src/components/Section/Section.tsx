import React from 'react'

import './Section.css'

class Section extends React.Component {
  render() {
    const { children } = this.props
    return <section className="Section">{children}</section>
  }
}

export default Section
