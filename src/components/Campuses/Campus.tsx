import React from 'react'
import { Header, Text, Buttons } from '..'

interface Props {
  data: ICampus
}

const Campus = ({ data }: Props) => {
  return (
    <div className={`campus ${data.alignment}`}>
      <div className="page-wrapper">
        <div className="content">
          <div className="extender" />
          <div className="padding">
            <Header type="h1">{data.header}</Header>
            <div className="divider" />
            <Text className="desc" size="small" color="white">
              {data.description}
            </Text>
          </div>
          <div className="btn-wrapper">
            <div className="btn-line" />
            <Buttons.Outline
              to={`/about/campuses${data.path}`}
              isLink
              size="large"
            >
              EXPLORE
            </Buttons.Outline>
          </div>
        </div>
      </div>
      <div className="bg-img">
        <img src={data.image} alt={data.header} />
      </div>
    </div>
  )
}

export default Campus
