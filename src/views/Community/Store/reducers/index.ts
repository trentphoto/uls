import { combineReducers } from 'redux'
import itemReducer from './itemReducer'
import cartReducer from './cartReducer'

export default combineReducers({
  item: itemReducer as any,
  cart: cartReducer as any
})
