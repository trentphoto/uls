import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css'
import Mobilebar from './Mobilebar'

const Navbar = () => (
  <React.Fragment>
    <Mobilebar />

    <div className="Nav">
      <div className="page-wrapper">
        <div className="upper-container">
          <div className="saying">Unifying, Learning, Serving.</div>
          <div className="links">
            <NavLink to="/students">Current Students</NavLink>
            <NavLink to="/future-students">Future Students</NavLink>
            <NavLink to="/faculty-staff">Faculty / Staff</NavLink>
            <NavLink to="/alumni">Alumni</NavLink>
          </div>
        </div>
        <div className="divider" />
        <div className="lower-container">
          <Link to="/" className="logo">
            <img
              src={require('../../assets/svgs/logo/oneline-tagline.svg')}
              alt="logo"
            />
          </Link>
          <div className="links">
            <NavLink exact to="/">
              <FontAwesomeIcon icon="home" size="lg" className="mr-2" />
              Home
            </NavLink>
            <NavLink to="/about">
              <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />
              About
            </NavLink>
            <NavLink to="/admissions">
              <FontAwesomeIcon icon="check-circle" size="lg" className="mr-2" />
              Admissions
            </NavLink>
            <NavLink to="/academics">
              <FontAwesomeIcon icon="book-open" size="lg" className="mr-2" />
              Academics
            </NavLink>
            <NavLink to="/united-media">
              <FontAwesomeIcon icon="image" size="lg" className="mr-2" />
              United Media
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default Navbar
