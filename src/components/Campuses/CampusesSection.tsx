import React from 'react'
import { guid } from '../../utils/generateID'
import Campus from './Campus'
import './campuses.css'

interface Props {
  data: ICampus[]
}

const CampusesSection = ({ data }: Props) => {
  return (
    <div className="campuses-section">
      {data.map((campus: ICampus) => (
        <Campus key={guid()} data={campus} />
      ))}
    </div>
  )
}

export default CampusesSection
