import React from 'react'
import { Link } from 'react-router-dom'
import './buttons.css'

interface Props {
  isLink?: boolean
  onClick?: (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => void
  children: any
}

const NoOutline = ({ isLink, children, onClick }: Props) => {
  const buttonType = () => {
    if (isLink) {
      return (
        <Link onClick={onClick} className="btn no-outline" to="/">
          {children}
        </Link>
      )
    }
    return (
      <div onClick={onClick} className="btn no-outline">
        {children}
      </div>
    )
  }
  return buttonType()
}

export default NoOutline
