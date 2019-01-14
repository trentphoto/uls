import React from 'react'
import { withSEO } from '../../utils/hocs'
import {
  Hero,
  FloatingTabs,
  Articles,
  FactsCard,
  Events
} from '../../components'
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
    <div className="grey-bg middle">
      <Events.UpcomingSlider slides={metaData.events} />
    </div>
  </div>
)

export default withSEO(Home, { title: 'Home' })
