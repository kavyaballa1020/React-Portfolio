import React, { Component } from 'react'
import Child from './child.js'

class MethodasProps extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        Message:"parent"
      }

      this.greetParent=this.greetParent.bind(this);

    }
   greetParent(childName){
    alert(`hello from ${this.state.Message} recieving ${childName}`)
   }
  render() {
    return (
    <div>

        <Child greethandler={this.greetParent}/>


    </div>
    )
  }
}
export default MethodasProps