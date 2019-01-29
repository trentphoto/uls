import React from 'react'
import renderHTML from 'react-render-html'
import { Header, Text } from '..'
import './hero.css'

interface Props {
  header: string
  subHeader?: string
}

const NoImage = ({ header, subHeader }: Props) => {
  return (
    <div className="hero no-image">
      <div className="bg-stripes">
        <img
          src={require('../../assets/images/hero-stripes.png')}
          alt="stripes"
        />
      </div>
      <div className="content-container">
        <Header type="h1">{header}</Header>
        {subHeader && (
          <Text size="large" color="white">
            {renderHTML(subHeader)}
          </Text>
        )}
      </div>
    </div>
  )
}

export default NoImage
