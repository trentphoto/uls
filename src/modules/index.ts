import { combineReducers } from 'redux'
import storeReducers from '../views/Community/Store/reducers'
import * as reducers from './ducks'

export default combineReducers({
  store: storeReducers,
  ...reducers
})
