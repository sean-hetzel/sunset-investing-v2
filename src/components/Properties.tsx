import React, { Component } from "react";
import NavBar from "components/NavBar";

interface Props {}
interface State {}

export default class Properties extends Component<Props, State> {
    state = {};

    render() {
        return (
            <>
                <NavBar />
                properties
            </>
        );
    }
}
