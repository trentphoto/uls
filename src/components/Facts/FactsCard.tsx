import React from 'react'
import FactsGrid from './FactsGrid'
import { Header, Text } from '..'
import './facts.css'

interface Props {
  header: string
  desc: string
  facts: TFactTypes[]
  colored?: boolean
}

const FactsCard = ({ facts, header, desc, colored }: Props) => {
  return (
    <div className={colored ? 'facts-card colored' : 'facts-card'}>
      <div className="page-wrapper">
        <Header colored type="h1">
          {header}
        </Header>
        <Text className="sub-desc" size="large" color="black">
          {desc}
        </Text>
        <FactsGrid data={facts} />
        <img
          src={require('../../assets/svgs/logo/icon.svg')}
          alt="bg"
          className="bg"
        />
      </div>
    </div>
  )
}

export default FactsCard
