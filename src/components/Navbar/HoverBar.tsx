import React from 'react'
import { NavLink } from 'react-router-dom'
import { HoverComponent, SecondaryLink, PrimaryLink } from './metadata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  id: string | null
  mouseEnter: any
  mouseLeave: any
  data: HoverComponent | null
}

const HoverBar = ({ data, id, mouseEnter, mouseLeave }: Props) => {
  return (
    <div
      onMouseEnter={() => mouseEnter(id)}
      onMouseLeave={mouseLeave}
      className={data ? 'hover-bar open' : 'hover-bar'}
    >
      {data && (
        <div className="content-container">
          <div className="flex-upper">
            {!data.hideSecondaryLinks &&
              data.secondaryLinks.map((link: SecondaryLink) => (
                <NavLink onClick={mouseLeave} key={link.label} to={link.path}>
                  {link.label}
                </NavLink>
              ))}
          </div>
          <div className="flex-lower">
            {data.primaryLinks.map((link: PrimaryLink) => (
              <NavLink
                onClick={mouseLeave}
                key={link.label}
                to={link.path}
                className="link-content"
              >
                <FontAwesomeIcon icon={link.icon} size="lg" className="mr-2" />
                <div className="label">{link.label}</div>
                <p>{link.description}</p>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default HoverBar
