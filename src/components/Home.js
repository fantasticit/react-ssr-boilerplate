import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { increment } from '../store/reducer'

class Home extends Component {
  render() {
    const { count, increment } = this.props

    return (
      <div>
        <h2>首页</h2>
        <p>{count}</p>
        <button onClick={increment}>+1</button>
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
      increment
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
