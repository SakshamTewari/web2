import { useState } from "react";

export function UseMemoHook() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    let sum = 0;
    for (let i = 1; i <= text; i++) {
        sum += i;
    }

    function updateCount() {
        setCount((count) => count + 1);
    }

    return (
        <div>
            <input onChange={(e) => {
                setText(e.target.value);
            }} placeholder="Find sum from 1 to n" />
            <p>Sum is: {sum}</p>
            <button onClick={updateCount}>Counter({count})</button>
        </div>
    )
}