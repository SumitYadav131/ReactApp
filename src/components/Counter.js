import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           count : 0
        }
      }
  
      increamentCount = () =>{
          this.setState(prevStat=>{
              return {count : prevStat.count+1} 
          })
      }

  render() {
    return (
      <div>
        {this.props.children(this.state.count,this.increamentCount)}
      </div>
    )
  }
}

export default Counter