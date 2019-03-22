import React from 'react'
import './SidebarCard.css'

const sidebarCard = props => {
  return (
    <a
      className="card sidebarCard p-4 d-none d-lg-block"
      href={props.link}
      data-target={props.link}
      data-toggle={props.modal && 'modal'}
    >
      <div className="sidebarCard__overlay" />
      <div className="sidebarCard__content">
        <h3>{props.title}</h3>
        <p className="smallcaps text-white">{props.subtitle}</p>
      </div>
    </a>
  )
}

export default sidebarCard
