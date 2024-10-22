import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Abhishek'
      }
      console.log("LifecycleA constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA GetDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }

  render() {
    console.log("LifecycleA Render")
    return (
      <div>
        <div>LifecycleA</div>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA