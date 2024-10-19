// useRef is used to access DOM elements in a much better way

import { useEffect, useRef } from "react";

export function UseRef() {
    let ref = useRef(0);
    let divRef = useRef();

    function incrementCount() {
        ref.current++;
        alert("You clicked " + ref.current + " times");
    }

    useEffect(() => {
        setTimeout(() => {
            divRef.current.innerHTML = "Updated using useRef";
        }, 4000);
    }, []);

    return <div>
        <button onClick={incrementCount}>Click me!</button>
        <p ref={divRef}></p>
    </div>
}