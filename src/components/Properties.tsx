import React, { Component } from "react";
import NavBar from "components/NavBar";
import PropertyCard from "./PropertyCard";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

interface Props {}
interface State {}

export default class Properties extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <NavBar />
        <Breadcrumb>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Properties</BreadcrumbItem>
        </Breadcrumb>
        <PropertyCard />
      </>
    );
  }
}
