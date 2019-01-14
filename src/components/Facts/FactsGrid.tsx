import React from 'react'
import Fact from './Fact'
import { guid } from '../../utils/generateID'

interface Props {
  data: TFactTypes[]
}

const FactsGrid = ({ data }: Props) => {
  return (
    <div className="facts-grid">
      {data.map((fact: TFactTypes) => (
        <Fact key={guid()} data={fact} />
      ))}
    </div>
  )
}

export default FactsGrid
