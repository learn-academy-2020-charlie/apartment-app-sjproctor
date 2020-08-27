import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <React.Fragment>
          <Nav className="footer">
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/index">All the Apartments</NavLink>
            </NavItem>
            { this.props.logged_in &&
              <>
                <NavItem>
                  <a href="/myapartments">My Apartments</a>
                </NavItem>
                <NavItem>
                  <a href="/new">Add a New Apartment</a>
                </NavItem>
                <NavItem>
                  <a href={ this.props.sign_out_route }>Sign Out</a>
                </NavItem>
              </>
            }
            { !this.props.logged_in &&
              <NavItem>
                <a href={ this.props.sign_in_route }>Sign In</a>
              </NavItem>
            }
          </Nav>
      </React.Fragment>
    )
  }
}
export default Footer
