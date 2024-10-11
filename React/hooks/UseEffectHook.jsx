import { useEffect, useState } from "react";

export function UseEffectHook() {

    const [todos, setTodos] = useState({});
    const [count, setCount] = useState(1);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
            .then(async (res) => {
                console.log("res:", res);
                const json = await res.json();
                console.log("json:", json);
                setTodos(json);
            })
    }, [count]);

    function updateCount() {
        setCount(Math.floor(Math.random() * 100));
    }

    return (
        <div>
            <button onClick={updateCount}>Update Todos</button>
            <Todos title={todos.title} completed={todos.completed} id={todos.id} />
        </div>
    )
}

function Todos({ title, completed, id }) {
    return (
        <div>
            <h1>{title}</h1><hr></hr>
            <h5>{completed}</h5>
            <h1>{id}</h1>

        </div>
    )
}