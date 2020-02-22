import React, { Component } from "react";
import NavBar from "components/NavBar";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

interface Props {}
interface State {}

export default class Profile extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <NavBar />
        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Profile</BreadcrumbItem>
        </Breadcrumb>
      </>
    );
  }
}
