import React, { Component } from 'react'

class Ternaryoperator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        logged:false
      }
    }
  render() {
    return (
        this.state.logged?
        <h1>HI, How are you?</h1>:
        <h1>you are not logged in, please login to my page.</h1>
    )
  }
}

export default Ternaryoperator