import React, { Component } from "react";
import NavBar from "components/NavBar";

interface Props {}
interface State {}

export default class Property extends Component<Props, State> {
    state = {};

    render() {
        return (
            <>
                <NavBar />
                property
            </>
        );
    }
}
