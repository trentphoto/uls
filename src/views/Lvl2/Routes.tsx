import React from 'react'
import Lvl2 from './Lvl2'
import { RouteComponentProps, Switch, Route } from 'react-router'
import ThirdLevel from '../ThirdLevel'

interface Props extends RouteComponentProps {}

export default ({ match, location }: Props) => (
  <Switch location={location}>
    <Route exact path={match.url} component={Lvl2} />
    <Route path={`${match.url}/:slug`} component={ThirdLevel} />
  </Switch>
)
