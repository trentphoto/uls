import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router'
import About from './About'
import ThirdLevel from '../ThirdLevel'

interface Props extends RouteComponentProps {}

const AboutRoutes = ({ match }: Props) => {
  return (
    <Switch>
      <Route exact path={match.url} component={About} />
      <Route exact path={`${match.path}/:slug`} component={ThirdLevel} />
      <Route
        exact
        path={`${match.path}/:third/:fourth`}
        component={ThirdLevel}
      />
      <Route
        exact
        path={`${match.path}/:third/:fourth/:fifth`}
        component={ThirdLevel}
      />
    </Switch>
  )
}

export default AboutRoutes
