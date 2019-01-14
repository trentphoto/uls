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

const Outline = ({ isLink, children, onClick }: Props) => {
  const buttonType = () => {
    if (isLink) {
      return (
        <Link onClick={onClick} className="btn outline" to="/">
          {children}
        </Link>
      )
    }
    return (
      <div onClick={onClick} className="btn outline">
        {children}
      </div>
    )
  }
  return buttonType()
}

export default Outline
