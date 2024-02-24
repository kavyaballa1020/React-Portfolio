import React, { Component } from 'react'

class Condition extends Component {

   constructor(props) {
      super(props)
    
      this.state = {
        message:false
      }
    }
  render() {
            
         if(this.state.message){
                return(
                    <h1>HI, How are you?</h1>
                )
            }
            else{
                return(
                    <h1>you are not logged in, please login to my page.</h1>
                )
            }   


  }
}

export default Condition