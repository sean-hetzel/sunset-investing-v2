import React, { Component } from "react";
import {
  Collapse,
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

interface Props {}
interface State {}

export default class NavBar extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <Navbar className="bg-primary" expand="lg">
          <Container>
            <NavbarBrand href="#" >
              Sunset Investing
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbarNavDropdown"
              type="button"
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarNavDropdown">
              <Nav navbar>
                <NavItem>
                  <NavLink href="#home" >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#properties" >
                    Properties
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#dashboard" >
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#holdings" >
                    Holdings
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    aria-expanded={false}
                    aria-haspopup={true}
                    caret
                    color="default"
                    data-toggle="dropdown"
                    href="#pablo"
                    id="navbarDropdownMenuLink"
                    nav
                    
                  >
                    Company
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                    <DropdownItem
                      href="#pablo"
                      
                    >
                      About
                    </DropdownItem>
                    <DropdownItem
                      href="#about"
                      
                    >
                      FAQ
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      
                    >
                      Learn
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
