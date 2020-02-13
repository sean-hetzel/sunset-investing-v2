import React from "react";
import { Link } from "react-router-dom";
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
import logo from "../assets/img/sunset-investing-logo.png";

class NavbarDocs extends React.Component {
    render() {
        return (
            <>
                <Navbar className="bg-danger" expand="lg">
                    <Container>
                        <NavbarBrand>
                            <Link to="home">
                                <img
                                    src={logo}
                                    alt="Sunset Investing"
                                    width="100"
                                />
                                Sunset Investing
                            </Link>
                        </NavbarBrand>
                        <button
                            className="navbar-toggler"
                            id="navbarNav"
                            type="button"
                        >
                            <span className="navbar-toggler-bar navbar-kebab" />
                            <span className="navbar-toggler-bar navbar-kebab" />
                            <span className="navbar-toggler-bar navbar-kebab" />
                        </button>
                        <UncontrolledCollapse navbar toggler="#navbarNav">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink>
                                        <a href="/properties">Properties</a>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink tag={Link} to="/dashboard">
                                        <a href="/dashboard">Dashboard</a>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink>
                                        <a href="/holdings">Holdings</a>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink>
                                        <a href="/about">About</a>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </UncontrolledCollapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default NavbarDocs;
