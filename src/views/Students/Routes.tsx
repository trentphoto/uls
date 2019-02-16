import React from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router'
import Students from './Students'
import ThirdLevel from '../ThirdLevel'

interface Props extends RouteComponentProps {}

export default ({ match }: Props) => (
  <Switch>
    <Route exact path={match.url} component={Students} />
    <Route path={`${match.path}/:slug`} component={ThirdLevel} />
  </Switch>
)
