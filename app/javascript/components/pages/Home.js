import React, { Component } from 'react'
import apartment from '../assets/apartment.png'

class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <h3>Checkout the apartments or create an account</h3>
        <img src={ apartment } id="image-apt"/>
      </React.Fragment>
    )
  }
}
export default Home
