import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.css'
import { ILink } from '../Footer/metaData'
import { guid } from '../../utils/generateID'

interface Props {
  data: ILink[]
}

const Sidebar = ({ data }: Props) => {
  return (
    <div className="sidebar">
      {data.map((link: ILink) => (
        <NavLink key={guid()} activeClassName="active" to={link.path}>
          {link.title}
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar
