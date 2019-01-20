import React from 'react'
import './third-level.css'
import { withSEO } from '../../utils/hocs'
import renderHTML from 'react-render-html'
import { Hero, Sidebar, Footer, Header } from '../../components'
import { metaData } from './metaData'
import Axios from 'axios'

interface State {
  loading: boolean
  error: string | null
  data: WPThirdLevel | null
}

class ThirdLevel extends React.Component<{}, State> {
  state: State = {
    loading: true,
    error: null,
    data: null
  }

  async componentWillMount() {
    const sampleURL =
      'https://clients.udioventures.com/dev/wp-json/wp/v2/pages/12'
    const res = await Axios.get(sampleURL)
    this.setState({ data: res.data as WPThirdLevel, loading: false })
  }

  public render() {
    const { loading, data } = this.state
    return (
      <div className="about page">
        <Hero.NoImage {...metaData.hero} />
        {!loading && data && (
          <div className="page-wrapper flex top">
            <Sidebar data={metaData.sidebar} />
            <div className="content">
              <Header type="h2" colored>
                {data.title.rendered}
              </Header>
              {renderHTML(data.content.rendered)}
            </div>
          </div>
        )}
        <Footer />
      </div>
    )
  }
}

export default withSEO(ThirdLevel, { title: 'Third Level' })
