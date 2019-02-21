import React from 'react'
import { RouteComponentProps, Switch, Route } from 'react-router'
import Academics from './Academics'
import ThirdLevel from '../ThirdLevel'

interface Props extends RouteComponentProps {}

const AcademicsRoutes = ({ match }: Props) => (
  <Switch>
    <Route exact path={match.url} component={Academics} />
    <Route path={`${match.path}/:slug`} component={ThirdLevel} />
  </Switch>
)

export default AcademicsRoutes
