import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => (
  <div className="navbar">
    <div className="page-wrapper">
      <div className="upper-container">
        <div className="saying">Unifying, Learning, Serving.</div>
        <div className="links">
          <NavLink to="/current-students">Current Students</NavLink>
          <NavLink to="/future-students">Future Students</NavLink>
          <NavLink to="/faculty-staff">Faculty / Staff</NavLink>
          <NavLink to="/almuni">Alumni</NavLink>
        </div>
      </div>
      <div className="divider" />
      <div className="lower-container">
        <div className="logo">
          <img src={require('../../assets/svgs/logo-colored.svg')} alt="logo" />
          <div className="text-container">
            <div className="school">United Lutheran Seminary</div>
            <div className="locations">Gettysburg + Philadelphia</div>
          </div>
        </div>
        <div className="links">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/admissions">Admissions</NavLink>
          <NavLink to="/academics">Academics</NavLink>
          <NavLink to="/united-media">United Media</NavLink>
        </div>
      </div>
    </div>
  </div>
)

export default Navbar