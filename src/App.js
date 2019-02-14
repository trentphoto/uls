// defaults
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  Home,
  NotFound,
  AboutRoutes,
  MediaRoutes,
  AdmissionsRoutes
} from './views'
import { Navbar } from './components'

import 'bootstrap/dist/css/bootstrap.min.css'

import './theme/block-theme.css'
import './theme/blocks.css'
import { withPages } from './utils/hocs'

const App = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={AboutRoutes} />
      <Route path="/admissions" component={AdmissionsRoutes} />
      <Route path="/united-media" component={MediaRoutes} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default withPages(App)
