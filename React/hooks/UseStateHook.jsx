/*
A re-render means
-React did some work to calculate what all should update in this component
-The component actually got called (put a log to confirm this)
-Inspector shows you bounding box around the component

It happens when
-A state variable that is being used inside a component changes
-A parent component re-renders triggering all its child components to re-render
*/
import { useState } from 'react';

function UseStateHook() {

    const [title, setTitle] = useState("Use State");

    function updateTitle() {
        setTitle("New number is " + Math.random());
    }
    return (
        <>
            <button onClick={updateTitle}>Update the title</button>
            <Header title={title} />
        </>
    )
}

// child component

function Header({ title }) {
    return (
        <div>
            <h4>{title}</h4>
        </div>
    )
}