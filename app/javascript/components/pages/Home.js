import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Home extends Component{
  render(){
    return(
      <React.Fragment>
        <Header
          logged_in={ this.props.logged_in }
          sign_in_route={ this.props.sign_in_route }
          sign_out_route={ this.props.sign_out_route }
        />
        <h3>Home</h3>
        <Footer />
      </React.Fragment>
    )
  }
}
export default Home
