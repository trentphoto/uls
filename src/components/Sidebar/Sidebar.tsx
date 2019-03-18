import React from 'react'
import {
  NavLink,
  match,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'
import './sidebar.css'
import { ILink } from '../Footer/metaData'
import { guid } from '../../utils/generateID'
import { Location } from 'history'
import renderHTML from 'react-render-html'
import { connect } from 'react-redux'
import { ReduxState } from '../../types/redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props extends RouteComponentProps {
  data?: ILink[]
  routes: ReduxState['pages']['currentRoute']['subpages']
  root: WPPage | null
}

const Sidebar = ({ data, routes, root, history }: Props) => {
  const checkActive = (match: match, location: Location, path: string) => {
    const slug = location.pathname.split('/').pop()
    return slug === path ? true : false
  }

  const convertRoutesToLinks = () => {
    const links: ILink[] = []
    if (root) {
      for (const key in routes) {
        links.push({
          id: routes[key].slug,
          title: routes[key].title.rendered,
          path: `/${root.slug}/${routes[key].slug}`,
          subpages: showSubLinks(routes[key].slug)
        })
      }
    }

    return links
  }
  const showSubLinks = (root: string) => {
    const slug = location.pathname.split('/').slice(2)
    if (slug[0] === root && slug.length > 0) {
      return slug.reduce((acc: any, currVal: string, currIndex: number) => {
        switch (currIndex) {
          case 0:
            acc = levelFourRoutes(currVal)
            break
          case 1:
            acc = levelFiveRoutes(acc, slug[0], currVal)
            break
          default:
            break
        }

        return acc
      }, [])
    }

    return undefined
  }
  const levelFourRoutes = (key: string) => {
    const subRoutes = []
    for (const route in routes[key].subpages) {
      const meta = routes[key].subpages[route]
      subRoutes.push({
        id: meta.slug,
        title: meta.title.rendered,
        path: `/${root && root.slug}/${routes[key].slug}/${meta.slug}`
      })
    }
    return subRoutes
  }

  const levelFiveRoutes = (
    current: ILink[],
    parentKey: string,
    key: string
  ) => {
    return current.map((parent: ILink) => {
      if (key === parent.id) {
        const subRoutes = []
        for (const route in routes[parentKey].subpages[key].subpages) {
          const meta = routes[parentKey].subpages[key].subpages[route]
          subRoutes.push({
            id: meta.slug,
            title: meta.title.rendered,
            path: `/${root && root.slug}/${routes[parentKey].slug}/${
              routes[parentKey].subpages[key].slug
            }/${meta.slug}`
          })
        }
        return { ...parent, subpages: subRoutes }
      }
      return parent
    })
  }

  type IconRoutes = 'about' | 'admissions' | 'academics'

  const setHeaderIcon = (slug: IconRoutes) => {
    switch (slug) {
      case 'about':
        return (
          <FontAwesomeIcon icon="info-circle" size="lg" className="mb-1 mr-2" />
        )
      case 'academics':
        return (
          <FontAwesomeIcon icon="book-open" size="lg" className="mb-1 mr-2" />
        )
      case 'admissions':
        return (
          <FontAwesomeIcon
            icon="check-circle"
            size="lg"
            className="mb-1 mr-2"
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="sidebar">
      {root && (
        <NavLink
          isActive={(match: match, location: Location) =>
            checkActive(match, location, root.slug)
          }
          key={guid()}
          activeClassName="active-top"
          to={`/${root.slug}`}
          className="top-link"
        >
          {setHeaderIcon(root.slug as any)}
          {renderHTML(root.title.rendered)}
        </NavLink>
      )}
      {convertRoutesToLinks().map((link: ILink) => (
        <LinkOrDiv level="two" key={guid()} link={link}>
          <React.Fragment>
            {link.subpages &&
              link.subpages.map((fourthLevel: ILink) => (
                <LinkOrDiv level="three" key={guid()} link={fourthLevel}>
                  <React.Fragment>
                    {fourthLevel.subpages &&
                      fourthLevel.subpages.map((fifthLevel: ILink) => (
                        <NavLink
                          isActive={(match: match, location: Location) =>
                            checkActive(match, location, fifthLevel.id)
                          }
                          key={guid()}
                          activeClassName="active"
                          to={fifthLevel.path}
                          className="four"
                        >
                          {renderHTML(fifthLevel.title)}
                        </NavLink>
                      ))}
                  </React.Fragment>
                </LinkOrDiv>
              ))}
          </React.Fragment>
        </LinkOrDiv>
      ))}
    </div>
  )
}

interface LinkOrDivProps {
  link: ILink
  level: 'two' | 'three'
  children: any
}

const LinkOrDiv = ({ link, children, level }: LinkOrDivProps) => {
  const checkActive = (match: match, location: Location, path: string) => {
    const slug = location.pathname.split('/').pop()
    return slug === path ? true : false
  }
  return (
    <React.Fragment>
      {link.subpages && link.subpages.length > 0 ? (
        <div className={`link ${level}`}>
          <NavLink to={link.path} exact className="link-title">
            {renderHTML(link.title)}
          </NavLink>
          {children}
        </div>
      ) : (
        <NavLink
          isActive={(match: match, location: Location) =>
            checkActive(match, location, link.id)
          }
          exact
          key={guid()}
          activeClassName="active"
          to={link.path}
          className={level}
        >
          {renderHTML(link.title)}
        </NavLink>
      )}
    </React.Fragment>
  )
}

const mapStateToProps = (state: ReduxState) => ({
  routes: state.pages.currentRoute.subpages,
  root: state.pages.currentRoute.root
})

export default withRouter(connect(mapStateToProps)(Sidebar))
