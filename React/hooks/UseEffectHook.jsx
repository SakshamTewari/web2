import { useEffect, useState } from "react";

export function UseEffectHook() {

    const [todos, setTodos] = useState({});


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${Math.floor(Math.random() * 10)}`)
            .then(async (res) => {
                console.log("res:", res);
                const json = await res.json();
                console.log("json:", json);
                setTodos(json);
            })
    }, []);

    console.log(todos)

    return (
        <div>
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