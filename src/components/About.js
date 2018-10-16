import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { decrement } from '../store/reducer'

class About extends Component {
  render() {
    const { count, decrement } = this.props

    return (
      <div>
        <h2>关于</h2>
        <p>{count}</p>
        <button onClick={decrement}>-1</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      decrement
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
