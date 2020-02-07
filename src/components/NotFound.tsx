import React, { ReactElement } from "react";
import NavBar from "components/NavBar";

interface Props {}

export default function NotFound({}: Props): ReactElement {
    return (
        <>
            <NavBar />
            not found
        </>
    );
}
