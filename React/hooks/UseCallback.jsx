import { useState } from "react";

export function UseCallback() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <ButtonComponent />
            <button onClick={() => {
                setCount(count + 1);
            }}></button>
        </div>
    )
}

const ButtonComponent = memo(() => {
    console.log("child render");

    return <div>
        <button>Button Clicked</button>
    </div>
})