import React from 'react'
import { withSEO, withPosts } from '../../utils/hocs'
import {
  Hero,
  FloatingTabs,
  Articles,
  FactsCard,
  Events,
  CampusesSection,
  Footer
} from '../../components'
import { metaData } from './metaData'
import { ReduxState } from '../../types/redux'
import './Home.css'

interface Props {
  posts: ReduxState['posts']['all']
}

const Home = ({ posts }: Props) => (
  <div className="home page">
    <Hero.WithImage {...metaData.hero} />
    <FloatingTabs {...metaData.tabs} />
    <div className="grey-bg top">
      <Articles.Preview data={posts.data} pageAmount={3} />
    </div>
    <FactsCard {...metaData.facts} />
    <div className="grey-bg middle">
      <Events.UpcomingSlider slides={metaData.events} />
    </div>
    <CampusesSection data={metaData.campuses} />
    <Footer />
  </div>
)

export default withPosts(withSEO(Home, { title: 'Home' }))
