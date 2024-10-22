import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Abhishek'
      }
      console.log("LifecycleB constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB GetDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleB componentDidMount")
    }

  render() {
    console.log("LifecycleB Render")
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB