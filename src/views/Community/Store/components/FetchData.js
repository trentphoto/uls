import React from 'react'
import { connect } from 'react-redux'
import { getItems } from '../actions/itemActions'
import { getDiscountCodes } from '../actions/cartActions'

class FetchData extends React.Component {
  componentDidMount() {
    this.props.getItems()
    this.props.getDiscountCodes()
  }
  render() {
    return null
  }
}

export default connect(
  null,
  { getItems, getDiscountCodes }
)(FetchData)
