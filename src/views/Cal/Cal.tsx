import React from 'react'
import './cal.css'
import { withSEO, withCurrentRoute } from '../../utils/hocs'
import { Hero, Footer, Calendar } from '../../components'
import { RouteComponentProps } from 'react-router'
import { ReduxState } from '../../types/redux'
import { siteBase } from '../../config'

interface Props extends RouteComponentProps<{ slug: string }> {
  pages: ReduxState['pages']['allPages']
}

class Cal extends React.Component<Props> {
  renderHero = (data: WPPage) => {
    if (data.acf.background_video) {
      return (
        <Hero.WithVideo
          header={data.title.rendered}
          subHeader={data.acf.sub_header}
          video={data.acf.background_video}
          overlay={data.acf.background_image_overlay}
          textDark={data.acf.textdark}
        />
      )
    }
    return data.acf.background_image ? (
      <Hero.WithImage
        header={data.title.rendered}
        subHeader={data.acf.sub_header}
        image={siteBase + data.acf.background_image}
        overlay={data.acf.background_image_overlay}
        textDark={data.acf.textdark}
      />
    ) : (
      <Hero.NoImage
        header={data.title.rendered}
        subHeader={data.acf.sub_header}
      />
    )
  }

  public render() {
    // const { pages } = this.props

    // const slug = ma
    // const slug = match.url.split('/').pop() as string
    // const page = pages['calendar']
    return (
      <div className="third-level page">
        <React.Fragment>
          {/* {this.renderHero(page.data)} */}
          <section className="py-5">
            <div className="container">
              <Calendar />
            </div>
          </section>
          <Footer />
        </React.Fragment>
      </div>
    )
  }
}

export default withCurrentRoute(withSEO(Cal, { title: 'Calendar' }))
