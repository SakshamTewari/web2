import { set } from "mongoose";
import { useState } from "react";

// parent component
export function MinimizeReRender() {

    return (
        <>
            <HeaderWithButton />
            <Header title="1st title" />
            <Header title="2nd title" />
        </>
    )
}

// 1st child component

function HeaderWithButton() {

    const [title, setTitle] = useState("Re-render");

    function updateTitle() {
        setTitle("Title: " + Math.random());
    }

    return (
        <div>
            <button onClick={updateTitle}>Update Title</button>
            <Header title={title} />
        </div>
    )
}

// 2nd child component

function Header({ title }) {
    return (
        <div>
            <h4>{title}</h4>
        </div>
    )
}