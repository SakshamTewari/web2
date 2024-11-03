// Same code as ContextAPI, but with 'Recoil' logic

import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

// just like the Context Provider, use RecoilRoot to wrap everything that uses 'atom'
// Although 'Count' component doesn't need the atom, but its a good practice to use RecoilRoot at the top
export function Recoil() {

    return (
        <div>
            <RecoilRoot>
                <Count />
            </RecoilRoot>

        </div>
    )
}
function Count() {
    return <div>
        <CountRenderer />
        <Buttons />
    </div>
}

function CountRenderer() {

    // using 'recoil' hooks, to get the count value
    const count = useRecoilValue(countAtom);
    return <b>
        {count}
    </b>

}

function Buttons() {
    // useRecoilState => to get values like useState
    // const [count, setCount] = useRecoilState(countAtom);

    // but as Buttons component do not need 'count' also, only setCount, so we will use another hook
    // onClick={() => setCount(count + 1)} will change to onClick={() => setCount(count => count + 1)}
    const setCount = useSetRecoilState(countAtom);
    return <div>
        <button onClick={() => setCount(count => count + 1)}>Increment</button>
        <button onClick={() => setCount(count => count + 1)}>Decrement</button>
    </div>
}