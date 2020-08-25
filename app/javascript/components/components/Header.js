import React, { Component } from 'react'
import {
  Collapse,
  Container,
  Jumbotron,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component{
  constructor(props){
    super(props)
    this.state = {
      collapsed: true
    }
  }
  toggleNavbar = () => {
    this.state.collapsed === true ?
    this.setState({ collapsed: false }) :
    this.setState({ collapsed: true })
  }
  render(){
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Apartment App</h1>
            <p className="lead">Find your next home.</p>
          </Container>
          <div>
            <Navbar color="faded" light>
              <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
              <NavbarToggler onClick={ this.toggleNavbar } className="mr-2" />
              <Collapse isOpen={ !this.state.collapsed } navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink to="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/index">Apartment List</NavLink>
                  </NavItem>
                  { this.props.logged_in &&
                    <NavItem>
                      <a href={ this.props.sign_out_route }>Sign Out</a>
                    </NavItem>
                  }
                  { !this.props.logged_in &&
                    <NavItem>
                      <a href={ this.props.sign_in_route }>Sign In</a>
                    </NavItem>
                  }
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </Jumbotron>
      </React.Fragment>
    )
  }
}

export default Header
