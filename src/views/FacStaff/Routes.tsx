import React from 'react'
import { Route, Switch, RouteComponentProps } from 'react-router'
import Students from './FacStaff'
import ThirdLevel from '../ThirdLevel'
import Directory from './Directory'

interface Props extends RouteComponentProps {}

export default ({ match }: Props) => (
  <Switch>
    <Route exact path={match.url} component={Students} />
    <Route exact path={`${match.path}/directory`} component={Directory} />
    <Route path={`${match.path}/:slug`} component={ThirdLevel} />
  </Switch>
)
