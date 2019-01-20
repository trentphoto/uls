// defaults
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, NotFound, AboutRoutes } from './views'
import { Navbar } from './components'

import './theme/block-theme.css'
import './theme/blocks.css'

const App = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={AboutRoutes} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
