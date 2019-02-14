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

const Filled = ({ isLink, children, onClick }: Props) => {
  const buttonType = () => {
    if (isLink) {
      return (
        <Link onClick={onClick} className="button filled" to="/">
          {children}
        </Link>
      )
    }
    return (
      <div onClick={onClick} className="button filled">
        {children}
      </div>
    )
  }
  return buttonType()
}

export default Filled
