import React from 'react'
import { RouteComponentProps, Switch, Route } from 'react-router'
import CommunityLife from './CommunityLife'
import ThirdLevel from '../ThirdLevel'

interface Props extends RouteComponentProps {}

const CommunityLifeRoutes = ({ match }: Props) => (
  <Switch>
    <Route exact path={match.url} component={CommunityLife} />
    <Route exact path={`${match.path}/:slug`} component={ThirdLevel} />
    <Route exact path={`${match.path}/:third/:fourth`} component={ThirdLevel} />
    <Route
      exact
      path={`${match.path}/:third/:fourth/:fifth`}
      component={ThirdLevel}
    />
  </Switch>
)

export default CommunityLifeRoutes
