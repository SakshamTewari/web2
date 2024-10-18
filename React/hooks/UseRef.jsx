import { useRef } from "react";

export function UseRef() {
    let ref = useRef(0);

    function incrementCount() {
        ref.current++;
        alert("You clicked " + ref.current + " times");
    }

    return <div>
        <button onClick={incrementCount}>Click me!</button>
    </div>
}