import React, { Component } from 'react'
import Header from '../components/Header'
import apartment from '../assets/apartment.png'

class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <Header
          logged_in={ this.props.logged_in }
          sign_in_route={ this.props.sign_in_route }
          sign_out_route={ this.props.sign_out_route }
        />
        <h3>Checkout the apartments or create an account</h3>
        <img src={ apartment } id="image-apt"/>
      </React.Fragment>
    )
  }
}
export default Home
