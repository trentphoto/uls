import React from 'react'
import { Text, Buttons } from '..'

interface Props {
  data: IDepartment
  mouseOver: (data: IDepartment) => void
}

const Department = ({ data, mouseOver }: Props) => {
  return (
    <div className="department" onMouseOver={() => mouseOver(data)}>
      <div className="content">
        <Text className="header" size="medium" color="white" weight="bold">
          {data.title}
        </Text>
        <div className="divider" />
        <Text className="desc" size="extra-small" color="white">
          {data.desc}
        </Text>
        <Buttons.Filled>EXPLORE</Buttons.Filled>
      </div>
    </div>
  )
}

export default Department
