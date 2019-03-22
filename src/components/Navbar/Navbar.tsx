import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css'
import Mobilebar from './Mobilebar'
import HoverBar from './HoverBar'
import { HoverData } from './metadata'

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null)

  const onMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) =>
    setHovered(e.currentTarget.id)

  const onMouseLeave = () => setHovered(null)

  const onHoverEnter = (id: string | null) => setHovered(id)

  return (
    <React.Fragment>
      <Mobilebar />
      <div className="Nav">
        <HoverBar
          mouseEnter={onHoverEnter}
          mouseLeave={onMouseLeave}
          id={hovered}
          data={hovered ? HoverData[hovered] : null}
        />
        <div className="nav-wrapper">
          <div className="page-wrapper">
            <div className="upper-container">
              <div className="saying">Unifying, Learning, Serving.</div>
              <div className="links">
                <NavLink to="/community">Community</NavLink>
                <NavLink to="/students">Students</NavLink>
                <NavLink to="/faculty-staff">Faculty / Staff</NavLink>
                <NavLink to="/alumni">Alumni</NavLink>
                <NavLink to="/giving">
                  <FontAwesomeIcon
                    icon="hand-holding-heart"
                    size="lg"
                    className="mr-2"
                  />
                  Giving
                </NavLink>
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
              <div onMouseLeave={onMouseLeave} className="links">
                <NavLink
                  onMouseOver={onMouseOver}
                  onClick={onMouseLeave}
                  exact
                  to="/"
                >
                  <FontAwesomeIcon icon="home" size="lg" className="mr-2" />
                  Home
                </NavLink>
                <NavLink
                  onClick={onMouseLeave}
                  id="about"
                  onMouseOver={onMouseOver}
                  to="/about"
                >
                  <FontAwesomeIcon
                    icon="info-circle"
                    size="lg"
                    className="mr-2"
                  />
                  About
                </NavLink>
                <NavLink
                  onClick={onMouseLeave}
                  id="admissions"
                  onMouseOver={onMouseOver}
                  to="/admissions"
                >
                  <FontAwesomeIcon
                    icon="check-circle"
                    size="lg"
                    className="mr-2"
                  />
                  Admissions
                </NavLink>
                <NavLink
                  onClick={onMouseLeave}
                  id="academics"
                  onMouseOver={onMouseOver}
                  to="/academics"
                >
                  <FontAwesomeIcon
                    icon="book-open"
                    size="lg"
                    className="mr-2"
                  />
                  Academics
                </NavLink>
                <NavLink
                  onClick={onMouseLeave}
                  id="communityLife"
                  onMouseOver={onMouseOver}
                  to="/united-media"
                >
                  <FontAwesomeIcon icon="image" size="lg" className="mr-2" />
                  United Media
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navbar
