import React from 'react'

const withCounter = (WrappedComponent,increamentvalue) => {
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count : 0
            }
          }
      
          increamenyCount = () =>{
              this.setState(prevState => {
                  return {count: prevState.count + increamentvalue}
              })
          }

        render(){
            return( 
            <WrappedComponent 
            count={this.state.count} 
            increamenyCount={this.increamenyCount} 
            {...this.props}
            />
            )
        }
    }
    return NewComponent
}

export default withCounter
