import React from 'react'
import { Header, Text } from '..'
import './hero.css'

interface Props {
  header: string
  subHeader?: string
  image: string
  overlay?: boolean
  textDark?: boolean
  small?: boolean
}

const WithImage = ({
  header,
  subHeader,
  image,
  overlay,
  textDark,
  small
}: Props) => {
  return (
    <div className={`hero with-image ${small ? 'hero-small' : ''}`}>
      <div className="bg-image">
        {overlay && <div className="overlay" />}
        <img src={image} alt={header} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Header dark={textDark} type="h1">
              {header}
            </Header>
          </div>
          <div className="col-md-5">
            {subHeader && (
              <Text size="large" color={textDark ? 'dark-gray' : 'white'}>
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
