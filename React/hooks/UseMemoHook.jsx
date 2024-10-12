import { useMemo, useState } from "react";

export function UseMemoHook() {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    /* This is an ugly way as the loop will always run when any of the state changes as parent component would re-render
    let sum = 0;
    for (let i = 1; i <= text; i++) {
        sum += i;
    }
    */

    // Using useMemo (similar to useEffect), but will only depend on some dependency
    const sum = useMemo(() => {
        let temp = 0;
        for (let i = 1; i <= inputValue; i++) {
            temp += i;
        };
        return temp;
    }, [inputValue])

    function updateCount() {
        setCount((count) => count + 1);
    }

    return (
        <div>
            <input onChange={(e) => {
                setInputValue(e.target.value);
            }} placeholder="Find sum from 1 to n" />
            <br />
            <p>Sum is: {sum}</p>
            <br />
            <button onClick={updateCount}>Counter({count})</button>
        </div>
    )
}