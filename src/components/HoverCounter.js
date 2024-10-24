import React, { Component } from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

  render() {
    const {count,increamenyCount,name} = this.props
    return <h2 onMouseOver={increamenyCount}> {name} Hover {count} Times</h2>
  }
}

export default withCounter(HoverCounter,5)