import { useEffect, useState } from "react";

export function CustomUseInterval() {

    const [count, setCount] = useState(0);

    useInterval(() => { setCount(c => c + 1) }, 2);

    return (
        <>
            Count is {count}
        </>
    )
}

// hook that runs a callback function every 'n' seconds

const useInterval = (fn, n) => {

    useEffect(() => {
        const interval = setInterval(() => {
            fn();
        }, n * 1000);

        return () => clearInterval(interval);
    }, []);



}