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
      <div className="container">
        <div className="row align-items-center">
          <div className={subHeader ? 'col-md-4' : ''}>
            <Header type="h1">{header}</Header>
          </div>
          <div className="col-md-8 px-5">
            {subHeader && (
              <Text size="large" color="white">
                {renderHTML(subHeader)}
              </Text>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoImage
