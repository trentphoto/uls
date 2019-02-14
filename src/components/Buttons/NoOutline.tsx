import React from 'react'
import { Link } from 'react-router-dom'
import './buttons.css'

interface Props {
  isLink?: boolean
  color?: 'blue' | 'orange'
  to?: string
  onClick?: (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => void
  children: any
}

const NoOutline = ({ isLink, children, onClick, color, to }: Props) => {
  const setClasses = () => {
    let classList = 'button no-outline'
    switch (color) {
      case 'blue':
        classList += ' blue'
        break
      default:
        break
    }
    return classList
  }
  const buttonType = () => {
    if (isLink) {
      return (
        <Link onClick={onClick} to={to ? to : '/'} className={setClasses()}>
          {children}
        </Link>
      )
    }
    return (
      <div onClick={onClick} className="button no-outline">
        {children}
      </div>
    )
  }
  return buttonType()
}

export default NoOutline
