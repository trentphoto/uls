import React from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router'
import Media from './Media'
import MediaPost from '../MediaPost'

interface Props extends RouteComponentProps {}

const MediaRoutes = ({ match }: Props) => {
  return (
    <Switch>
      <Route exact path={match.url} component={Media} />
      <Route path={`${match.path}/:slug`} component={MediaPost} />
    </Switch>
  )
}

export default MediaRoutes
