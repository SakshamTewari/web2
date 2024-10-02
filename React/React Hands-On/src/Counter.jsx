import { useState } from "react";

function Counter() {

    let [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count => count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Counter {count}</button>
        </div>
    )
}

export default Counter;