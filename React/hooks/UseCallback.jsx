import { useCallback, useState, memo } from "react";

export function UseCallback() {

    const [count, setCount] = useState(0);

    /*
    useCallback makes a function referentially equal.
    function will only change 'referentially' when some input changes and not when just the parent component re-renders.
    */
    const inputFunction = useCallback(() => {
        console.log("using callback");
    }, []);

    return (
        <div>
            <ButtonComponent inputFunction={inputFunction} />
            <button onClick={() => {
                setCount(count + 1);
            }}>Click</button>
        </div>
    )
}

/*
When a child component is wrapped around 'memo', then that child will only render when its input changes.
It will not just render when parent component renders
*/

const ButtonComponent = memo(({ inputFunction }) => {
    console.log("child render");

    return <div>
        <button>Button Clicked</button>
    </div>
})