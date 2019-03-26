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

interface Props {
  posts: ReduxState['posts']['all']
  page: ReduxState['pages']['currentRoute']
}

const Presidential = ({ posts, page }: Props) => {
  return (
    <div className="presidents-newsletter-page page">
      {page && page.root ? (
        <React.Fragment>
          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 mb-5">
                  <Sidebar />
                </div>
                <div className="col-md-8">
                  <Header colored type="h2">
                    {page.root.title.rendered}
                  </Header>
                  <Content data={page.root.content.rendered} />
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
