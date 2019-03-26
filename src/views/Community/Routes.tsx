import React from 'react'
import { RouteComponentProps, Switch, Route } from 'react-router'
import Community from './Community'
import Calendar from './Calendar'
import Updates from './Updates'
import Store from './Store'

interface Props extends RouteComponentProps {}

const CommunityRoutes = ({ match, location }: Props) => (
  <Switch location={location}>
    <Route exact path={match.url} component={Community} />
    <Route
      exact
      path={`${match.path}/calendar-of-events`}
      component={Calendar}
    />
    <Route exact path={`${match.path}/store`} component={Store} />
    <Route exact path={`${match.path}/community-updates`} component={Updates} />
  </Switch>
)

export default CommunityRoutes
