// defaults
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { About, Home, NotFound, Blog, Single } from './views'
import Navbar from './components/Navbar'

const App = () => (
  <div className="App">
    <Navbar />
    <div className="page-wrapper">
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact={true} path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={Single} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
