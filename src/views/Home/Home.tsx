import React from 'react'
import { withSEO } from '../../utils/hocs'
import { Hero, FloatingTabs } from '../../components'
import { metaData } from './metaData'

import './home.css'

const Home = () => (
  <div className="home page">
    <Hero.WithImage {...metaData.hero} />
    <FloatingTabs {...metaData.tabs} />
  </div>
)

export default withSEO(Home, { title: 'Home' })
