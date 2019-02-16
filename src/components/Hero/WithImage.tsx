import React from 'react'
import { Header, Text } from '..'
import './hero.css'

interface Props {
  header: string
  subHeader?: string
  image: string
}

const WithImage = ({ header, subHeader, image }: Props) => {
  return (
    <div className="hero with-image">
      <div className="bg-image">
        <div className="overlay" />
        <img src={image} alt={header} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Header type="h1">{header}</Header>
          </div>
          <div className="col-md-8">
            {subHeader && (
              <Text size="large" color="white">
                {subHeader}
              </Text>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WithImage
