import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

  render() {
    // const {count} = this.state
    const {count,increamenyCount,name}= this.props
    return <button onClick={increamenyCount}> {name} Clicked {count} times</button>
  }
}

export default withCounter(ClickCounter,10)