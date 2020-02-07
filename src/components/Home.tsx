import React, { Component } from "react";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col,
    Navbar
} from "reactstrap";
import NavBar from "components/NavBar";
interface Props {}
interface State {}

export default class Home extends Component<Props, State> {
    state = {};

    render() {
        return (
            <>
                <NavBar />
                home
            </>
        );
    }
}
