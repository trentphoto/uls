import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface State {
  drawerOpen: boolean
}

class Mobilebar extends React.Component<{}, State> {
  state: State = {
    drawerOpen: false
  }
  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }
  render() {
    const { drawerOpen } = this.state
    return (
      <React.Fragment>
        <div className="mobile-nav">
          <div className="flex-container">
            <Link to="/" className="logo">
              <img
                src={require('../../assets/svgs/logo/oneline-tagline.svg')}
                alt="logo"
              />
            </Link>
            <div onClick={this.toggleDrawer} className="hamburger">
              <div className="bun" />
            </div>
          </div>
        </div>
        <div className={drawerOpen ? 'drawer open' : 'drawer'}>
          <div className="mobile-links">
            <NavLink onClick={this.toggleDrawer} exact to="/">
              <FontAwesomeIcon icon="home" size="lg" className="mr-2" />
              Home
            </NavLink>
            <NavLink onClick={this.toggleDrawer} to="/about">
              <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />
              About
            </NavLink>
            <NavLink onClick={this.toggleDrawer} to="/admissions">
              <FontAwesomeIcon icon="check-circle" size="lg" className="mr-2" />
              Admissions
            </NavLink>
            <NavLink onClick={this.toggleDrawer} to="/academics">
              <FontAwesomeIcon icon="book-open" size="lg" className="mr-2" />
              Academics
            </NavLink>
            <NavLink onClick={this.toggleDrawer} to="/united-media">
              <FontAwesomeIcon icon="image" size="lg" className="mr-2" />
              United Media
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
export default Mobilebar
