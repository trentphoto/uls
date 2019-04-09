import React, { useState } from 'react'
import renderHTML from 'react-render-html'
import { withSEO, withPosts, withCurrentRoute } from '../../utils/hocs'
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
import Axios from 'axios'

interface Props {
  posts: ReduxState['posts']['all']
}

const Home = ({ posts }: Props) => {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchEvents = async () => {
    const url =
      'https://uls2.unitedlutheranseminary.org/wp-json/wp/v2/calendar?_embed&per_page=50'
    const newEvents = await Axios.get(url).then(res =>
      res.data.slice(0, 3).map((item: any) => {
        const start = new Date(item.acf.start_date.replace(/-/g, '/'))
        const end = new Date(item.acf.end_date.replace(/-/g, '/'))
        return {
          img: item._embedded
            ? 'https://uls2.unitedlutheranseminary.org' +
              item._embedded['wp:featuredmedia'][0].source_url
            : '',
          title: renderHTML(item.title.rendered),
          desc: item.acf.description,
          startDate: start,
          endDate: end
        }
      })
    )
    setEvents(newEvents)
    setLoading(false)
  }

  fetchEvents()

  return (
    <div className="home page">
      <Hero.WithImage {...metaData.hero} />
      <FloatingTabs {...metaData.tabs} />
      <div className="grey-bg top">
        <Articles.Preview data={posts.data} pageAmount={3} />
      </div>
      <FactsCard {...metaData.facts} />
      <div className="grey-bg middle">
        {!loading && <Events.UpcomingSlider slides={events} />}
      </div>
      <CampusesSection data={metaData.campuses} />
      <Footer />
    </div>
  )
}

export default withCurrentRoute(withPosts(withSEO(Home, { title: 'Home' })))
