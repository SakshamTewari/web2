import { disconnect, set } from "mongoose";
import { useState } from "react";

function ContextAPI() {

    const [count, setCount] = useState(0);

    return <div>
        <Count count={count} setCount={setCount} />
    </div>
}

function Count({ count, setCount }) {
    return <div>
        <CountRenderer count={count} />
        <Buttons count={count} setCount={setCount} />
    </div>
}

function CountRenderer({ count }) {
    return <div>
        {count}
    </div>
}

function Buttons({ count, setCount }) {
    return <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
}