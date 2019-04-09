import React from 'react'
import { withSEO, withCurrentRoute } from '../../utils/hocs'
import {
  Hero,
  Sidebar,
  //   Header,
  Footer,
  Loader
  // Content
} from '../../components'
import { RouteComponentProps } from 'react-router'
import { ReduxState } from '../../types/redux'
import Axios from 'axios'
import { guid } from '../../utils/generateID'

interface Props extends RouteComponentProps {
  pages: ReduxState['pages']['allPages']
}

interface Staff {
  acf: {
    first_name: string
    last_name: string
    title: string
    bio: string
    phone: string
    email: string
    website: string
    mailing_address: string
  }
}

interface State {
  staff: Staff[]
  loading: boolean
}

class Directory extends React.Component<Props> {
  state: State = {
    staff: [],
    loading: true
  }

  componentDidMount = async () => {
    const staff = await Axios.get(
      'http://uls2.unitedlutheranseminary.org/wp-json/wp/v2/faculty-staff?_embed'
    )

    this.setState({ staff: staff.data })
  }

  public render() {
    const { pages, match } = this.props
    console.log(this.state.staff)

    // const slug = ma
    const slug = match.url.split('/').pop() as string
    const page = pages[slug]

    return (
      <div className="page">
        {page && page.data ? (
          <React.Fragment>
            {page.data.acf.background_image ? (
              <Hero.WithImage
                header={page.data.title.rendered}
                subHeader={page.data.acf.sub_header}
                image={page.data.acf.background_image}
              />
            ) : (
              <Hero.NoImage
                header={page.data.title.rendered}
                subHeader={page.data.acf.sub_header}
              />
            )}

            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 mb-5">
                    <Sidebar />
                  </div>
                  <div className="col-md-8">
                    <div className="staff-list">
                      {this.state.staff.map((member: Staff) => (
                        <div key={guid()} className="staff-member">
                          <div className="staff-photo">
                            <a href="https://unitedlutheranseminary.edu/faculty-staff/andrew-crouse/">
                              <img
                                width="240"
                                height="300"
                                src="https://unitedlutheranseminary.edu/faculty-staff/andrew-crouse/wp-content/uploads/2017/09/crouse-dir.jpg"
                                className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                alt="Andrew Crouse - United Lutheran Seminary"
                              />
                            </a>
                          </div>

                          <div className="staff-member-right">
                            <h3 className="staff-member-name">
                              <a href="https://unitedlutheranseminary.edu/faculty-staff/andrew-crouse/">
                                {member.acf.first_name} {member.acf.last_name}
                              </a>
                            </h3>
                            <p className="staff-member-title">
                              {member.acf.title}
                            </p>
                            <div className="staff-member-contacts">
                              <p className="staff-member-phone">
                                <strong>Phone:</strong> {member.acf.phone}
                              </p>
                              <p className="staff-member-email">
                                <strong>Email: </strong>
                                <a href={`mailto:${member.acf.email}`}>
                                  {member.acf.email}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </React.Fragment>
        ) : (
          <Loader />
        )}
      </div>
    )
  }
}

export default withCurrentRoute(withSEO(Directory, { title: 'Directory' }))
