import React from 'react'
import './About.css'
import { withSEO } from '../../utils/hocs'
import {
  Hero,
  Sidebar,
  Header,
  Text,
  FactsCard,
  CampusesSection,
  Footer
} from '../../components'
import { metaData } from './metaData'

class About extends React.Component {
  public render() {
    return (
      <div className="about page">
        <Hero.WithImage {...metaData.hero} />
        <div className="page-wrapper flex top">
          <Sidebar data={metaData.sidebar} />
          <div className="content">
            <Header colored type="h2">
              {metaData.content.header}
            </Header>
            <Text size="medium" color="black">
              {metaData.content.text}
            </Text>
          </div>
        </div>
        <FactsCard {...metaData.facts} colored />
        <CampusesSection data={metaData.campuses} />
        <Footer />
      </div>
    )
  }
}

export default withSEO(About, { title: 'About' })
