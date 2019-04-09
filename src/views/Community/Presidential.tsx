import React from 'react'
import { withSEO, withPosts, withCurrentRoute } from '../../utils/hocs'
import {
  Hero,
  Articles,
  Footer,
  Sidebar,
  Header,
  Content,
  Loader
} from '../../components'
import { ReduxState } from '../../types/redux'
import { RouteComponentProps } from 'react-router'

interface Props extends RouteComponentProps {
  posts: ReduxState['posts']['all']
  pages: ReduxState['pages']['allPages']
}

const Presidential = ({ match, posts, pages }: Props) => {
  // const slug = ma
  const slug = match.url.split('/').pop() as string
  const page = pages[slug]
  return (
    <div className="presidents-newsletter-page page">
      {page && page.data ? (
        <React.Fragment>
          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 mb-5">
                  <Sidebar />
                </div>
                <div className="col-md-8">
                  <Header colored type="h2">
                    {page.data.title.rendered}
                  </Header>
                  <Content data={page.data.content.rendered} />
                </div>
              </div>
            </div>
          </section>
          <Hero.WithImage
            header="From My Desk to Yours"
            subHeader="ULS President's Newsletter"
            image="https://unitedlutheranseminary.edu/wp-content/uploads/2018/09/From-My-Desk-to-Yours-United-Lutheran-Seminary-2.jpg"
          />
          {Object.keys(posts.data).length !== 0 && (
            <div className="page-wrapper">
              <Articles.ArticleSlider data={posts.data} />
              <Articles.ArticleGrid data={posts.data} pageAmount={3} />
            </div>
          )}
          <Footer />
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default withCurrentRoute(
  withPosts(withSEO(Presidential, { title: 'From My Desk to Yours' }))
)
