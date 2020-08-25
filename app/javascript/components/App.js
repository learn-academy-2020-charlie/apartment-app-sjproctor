import React from "react"
import PropTypes from "prop-types"
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends React.Component {
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
          <Route exact path="/index" component={ ApartmentIndex }/>
          <Route exact path="/show" component={ ApartmentShow }/>
        </Switch>
      </Router>
    );
  }
}

export default App
