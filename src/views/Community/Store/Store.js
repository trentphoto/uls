import 'raf/polyfill'

import 'core-js/es6/map'
import 'core-js/es6/set'

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './store.css'

import FetchData from './components/FetchData'
import FullView from './components/FullView/FullView'
import Grid from './components/Grid/Grid'
import CartButton from './components/Cart/CartButton'
import Cart from './components/Cart/Cart'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTimes,
  faMinus,
  faPlus,
  faShoppingBasket,
  faChevronRight,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
  faSpinner,
  faLock
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faTimes,
  faMinus,
  faPlus,
  faShoppingBasket,
  faChevronRight,
  faChevronLeft,
  faChevronUp,
  faChevronDown,
  faSpinner,
  faLock
)

class Store extends Component {
  render() {
    return (
      <div className="Store">
        <FetchData />
        <FullView />
        <Grid />
        <CartButton />
        <Cart />
      </div>
    )
  }
}

export default Store
