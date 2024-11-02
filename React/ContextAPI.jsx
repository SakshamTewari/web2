import { useContext, useState } from "react";
import { CountContext } from "./context";

export function ContextAPI() {

    const [count, setCount] = useState(0);

    //wrap anyone that wants to use the teleported value inside a provider
    return (
        <div>
            <CountContext.Provider value={count}>
                {/* <Count count={count} setCount={setCount} /> */}
                <Count setCount={setCount} />    {/* count value is passed via provider */}
            </CountContext.Provider>
        </div>
    )
}

function Count({ setCount }) {
    return <div>
        <CountRenderer />
        <Buttons setCount={setCount} />
    </div>
}

function CountRenderer() {

    // using 'count' value using CountContext provider
    const count = useContext(CountContext);
    return <div>
        {count}
    </div>
}

function Buttons({ setCount }) {

    // using 'count' value using CountContext provider
    const count = useContext(CountContext);
    return <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
}