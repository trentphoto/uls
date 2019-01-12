import React from 'react'
import './header.css'

type headers = 'h1' | 'h2' | 'h3' | 'h4'

interface HeaderProps {
  type: headers
  colored?: boolean
  centered?: boolean
  children: any
}

const Header = ({ type, children, colored, centered }: HeaderProps) => {
  const determineHeaderType = () => {
    switch (type) {
      case 'h1':
        return <h1>{children}</h1>
      case 'h2':
        return <h2>{children}</h2>
      case 'h3':
        return <h3>{children}</h3>
      case 'h4':
        return <h4>{children}</h4>
      default:
        return <h2>{children}</h2>
    }
  }
  return (
    <header className={`${colored && 'colored'} ${centered && 'centered'}`}>
      {determineHeaderType()}
    </header>
  )
}

export default Header
