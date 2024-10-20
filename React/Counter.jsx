import { useState } from "react";

function Counter() {

    let [count, setCount] = useState(0);

    return (
        <div>
            <CustomButton count={count} setCount={setCount}></CustomButton>
        </div>
    )
}

// component
function CustomButton(props) {

    const handleClick = () => {
        props.setCount(count => count + 1);
    }

    return (
        <button onClick={handleClick}>
            Counter {props.count}
        </button>
    )
}

export default Counter;