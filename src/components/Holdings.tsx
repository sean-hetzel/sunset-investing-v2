import React, { Component } from "react";
import NavBar from "components/NavBar";

interface Props {}
interface State {}

export default class Holdings extends Component<Props, State> {
    state = {};

    render() {
        return (
            <>
                <NavBar />
                Holdings
            </>
        );
    }
}
