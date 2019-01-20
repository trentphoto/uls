// defaults
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { About, Home, NotFound, ThirdLevel } from './views'
import { Navbar } from './components'

import './theme/block-theme.css'
import './theme/blocks.css'

const App = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/about" component={About} />
      <Route path="/about/:slug" component={ThirdLevel} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
