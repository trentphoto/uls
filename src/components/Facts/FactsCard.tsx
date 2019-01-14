import React from 'react'
import FactsGrid from './FactsGrid'
import { Header, Text } from '..'
import './facts.css'

interface Props {
  header: string
  desc: string
  facts: TFactTypes[]
}

const FactsCard = ({ facts, header, desc }: Props) => {
  return (
    <div className="facts-card page-wrapper">
      <Header colored type="h1">
        {header}
      </Header>
      <Text className="sub-desc" size="large" color="black">
        {desc}
      </Text>
      <FactsGrid data={facts} />
      <img
        src={require('../../assets/svgs/logo-colored.svg')}
        alt="bg"
        className="bg"
      />
    </div>
  )
}

export default FactsCard
