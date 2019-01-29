import React from 'react'
import { Header, Text, Buttons } from '..'
import './president.css'

interface Props {
  data: {
    header: string
    subHeader: string
    desc: string
    image: string
    path: string
  }
}

const President = ({ data }: Props) => {
  return (
    <div className="president">
      <div className="page-wrapper">
        <div className="content">
          <div className="extender" />
          <div className="padding">
            <Header type="h1">{data.header}</Header>
            <div className="divider" />
            <Text className="desc" size="small" color="white">
              {data.desc}
            </Text>
          </div>
          <div className="btn-wrapper">
            <div className="btn-line" />
            <Buttons.NoOutline isLink color="blue">
              READ MORE
            </Buttons.NoOutline>
          </div>
        </div>
      </div>
      <div className="bg-img">
        <img src={data.image} alt={data.header} />
      </div>
    </div>
  )
}

export default President
