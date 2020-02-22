import React, { Component } from "react";
import NavBar from "components/NavBar";
import { Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import tempHouse1 from "../assets/img/tempHouse1.jpg"

interface Props {}
interface State {}

export default class Property extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <NavBar />
        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Property</BreadcrumbItem>
        </Breadcrumb>
        <Col lg="4" md="5">
          <img
            alt="..."
            className="img-fluid"
            src={require("assets/img/tempHouse1.jpg")}
          />
        </Col>
        <h1 className="primary">$Money</h1>
      </>
    );
  }
}
