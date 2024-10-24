import React, { Component } from 'react'

export class HoverCounterTwo extends Component {

  render() {
    const {count,increamentCount} = this.props
    return (
      <h2 onMouseOver={increamentCount}>Hover {count} times</h2>
    )
  }
}

export default HoverCounterTwo