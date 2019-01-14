import React from 'react'
import { withSEO } from '../../utils/hocs'
import { Hero, FloatingTabs, Articles, FactsCard } from '../../components'
import { metaData } from './metaData'

import './home.css'

const Home = () => (
  <div className="home page">
    <Hero.WithImage {...metaData.hero} />
    <FloatingTabs {...metaData.tabs} />
    <div className="grey-bg top">
      <Articles.Preview data={metaData.articles} pageAmount={3} />
    </div>
    <FactsCard {...metaData.facts} />
  </div>
)

export default withSEO(Home, { title: 'Home' })
