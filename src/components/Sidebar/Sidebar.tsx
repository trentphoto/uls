import React from 'react'
import { NavLink, match } from 'react-router-dom'
import './sidebar.css'
import { ILink } from '../Footer/metaData'
import { guid } from '../../utils/generateID'
import { Location } from 'history'

interface Props {
  data: ILink[]
}

const Sidebar = ({ data }: Props) => {
  const checkActive = (match: match, location: Location, path: string) => {
    const slug = location.pathname.split('/').pop()
    return slug === path ? true : false
  }
  return (
    <div className="sidebar">
      {data.map((link: ILink) => (
        <NavLink
          isActive={(match: match, location: Location) =>
            checkActive(match, location, link.path)
          }
          key={guid()}
          activeClassName="active"
          to={link.path}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar
