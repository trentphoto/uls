import React from 'react'
import { Header, Text } from '..'
import './hero.css'

interface Props {
  header: string
  subHeader?: string
  image?: string
}

const WithImage = ({ header, subHeader, image }: Props) => {
  return (
    <div className="hero">
      <div className="bg-image">
        <div className="overlay" />
        <img src={image} alt={header} />
      </div>
      <div className="content-container">
        <Header type="h1">{header}</Header>
        {subHeader && (
          <Text size="large" color="white">
            {subHeader}
          </Text>
        )}
      </div>
    </div>
  )
}

export default WithImage
