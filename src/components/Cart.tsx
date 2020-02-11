import React, { Component } from "react";
import NavBar from "components/NavBar";

interface Props {}
interface State {}

export default class Cart extends Component<Props, State> {
    state = {};

    render() {
        return (
            <>
                <NavBar />
                cart
            </>
        );
    }
}
