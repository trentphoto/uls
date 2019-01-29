import React from 'react'
import { Link } from 'react-router-dom'
import './buttons.css'

type ButtonSizes = 'large' | 'medium'
interface Props {
  size: ButtonSizes
  color?: 'white' | 'dark'
  isLink?: boolean
  to?: string
  onClick?: (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ) => void
  children: any
}

const Outline = ({ isLink, children, onClick, size, to, color }: Props) => {
  const setClasses = () => {
    let classList = 'btn outline'
    switch (size) {
      case 'medium':
        classList += ' medium'
        break
      default:
        classList += ' large'
        break
    }
    switch (color) {
      case 'white':
        classList += ' white'
        break
      default:
        break
    }
    return classList
  }
  const buttonType = () => {
    if (isLink && to) {
      return (
        <Link to={to} onClick={onClick} className={setClasses()}>
          {children}
        </Link>
      )
    }
    return (
      <div onClick={onClick} className={setClasses()}>
        {children}
      </div>
    )
  }
  return buttonType()
}

export default Outline
