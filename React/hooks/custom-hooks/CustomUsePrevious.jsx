/* Create a hook that remembers the previous value of the state */

import { useEffect, useRef, useState } from "react";

const CustomUsePrevious = () => {
    const [count, setCount] = useState(0);

    const prevCount = usePrevious(count);

    return (
        <div>
            <h1>
                Now: {count}, before:{prevCount}

            </h1>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

        </div>
    )
}

const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => { ref.current = value }, [value]);

    return ref.current;
}

export default CustomUsePrevious;