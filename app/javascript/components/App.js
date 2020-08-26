import React, { Component } from 'react'
import Footer from './components/Footer'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import mockApartments from './mockApartments.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log("logged_in", logged_in)
    return (
      <Router>
        <Switch>
          <Route
            exact path="/"
            render={ (prop) =>
              <Home
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
              />
            }
          />
          <Route
            path="/index"
            render={ (props) =>
              <ApartmentIndex
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
                apartments={ this.state.apartments }
              />
            }
          />
          <Route
            path={"/show/:id"}
            render={ (props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
              return (
                <ApartmentShow apartment={ apartment } />
              )
            }}
          />
        </Switch>
        <Footer
          logged_in={ this.props.logged_in }
          sign_in_route={ this.props.sign_in_route }
          sign_out_route={ this.props.sign_out_route }
        />
      </Router>
    );
  }
}

export default App
