import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SecondaryLink, HoverData } from './metadata'

const Mobilebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [secondaryLinks, setSecondaryLinks] = useState<SecondaryLink[] | null>(
    null
  )

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
    setSecondaryLinks(null)
  }

  const toggleSecondaryLinks = (e: React.MouseEvent<HTMLDivElement>) => {
    setSecondaryLinks(HoverData[e.currentTarget.id].secondaryLinks)
  }

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
          <div onClick={toggleDrawer} className="hamburger">
            <div className="bun" />
          </div>
        </div>
      </div>
      <div className={drawerOpen ? 'drawer open' : 'drawer'}>
        <div
          className={
            secondaryLinks ? 'sec-mobile-links open' : 'sec-mobile-links'
          }
        >
          <div onClick={() => setSecondaryLinks(null)} className="back">
            <img src={require('../../assets/svgs/arrow-gray.svg')} alt="" />
            Back
          </div>
          {secondaryLinks &&
            secondaryLinks.map((link: SecondaryLink) => (
              <NavLink
                key={link.label}
                onClick={toggleDrawer}
                exact
                to={link.path}
              >
                {/* <FontAwesomeIcon icon="home" size="lg" className="mr-2" /> */}
                {link.label}
              </NavLink>
            ))}
        </div>
        <div
          className={secondaryLinks ? 'mobile-links closed' : 'mobile-links'}
        >
          <div className="small-links">
            <NavLink onClick={toggleDrawer} exact to="/students">
              {/* <FontAwesomeIcon icon="home" size="lg" className="mr-2" /> */}
              Students
            </NavLink>
            <NavLink onClick={toggleDrawer} exact to="/faculty-staff">
              {/* <FontAwesomeIcon icon="home" size="lg" className="mr-2" /> */}
              Faculty / Staff
            </NavLink>
            <NavLink onClick={toggleDrawer} exact to="/alumni">
              {/* <FontAwesomeIcon icon="home" size="lg" className="mr-2" /> */}
              Alumni
            </NavLink>
            <NavLink onClick={toggleDrawer} exact to="/giving">
              <FontAwesomeIcon
                icon="hand-holding-heart"
                size="lg"
                className="mr-2"
              />
              Giving
            </NavLink>
          </div>
          <NavLink onClick={toggleDrawer} exact to="/">
            <FontAwesomeIcon icon="home" size="lg" className="mr-2" />
            Home
          </NavLink>
          <div id="about" className="link" onClick={toggleSecondaryLinks}>
            <FontAwesomeIcon icon="info-circle" size="lg" className="mr-2" />
            About
          </div>
          <div id="admissions" className="link" onClick={toggleSecondaryLinks}>
            <FontAwesomeIcon icon="check-circle" size="lg" className="mr-2" />
            Admissions
          </div>
          <div id="academics" className="link" onClick={toggleSecondaryLinks}>
            <FontAwesomeIcon icon="book-open" size="lg" className="mr-2" />
            Academics
          </div>
          <div
            id="communityLife"
            className="link"
            onClick={toggleSecondaryLinks}
          >
            <FontAwesomeIcon icon="image" size="lg" className="mr-2" />
            Community Life
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Mobilebar
