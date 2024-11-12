import { useEffect, useState } from "react";

export function UseEffectHook() {

    const [todos, setTodos] = useState({});
    const [count, setCount] = useState(1);
    const [render, setRender] = useState(true);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
            .then(async (res) => {
                console.log("res:", res);
                const json = await res.json();
                console.log("json:", json);
                setTodos(json);
            })
    }, [count]);

    useEffect(() => {
        setTimeout(() => {
            setRender(false);
        }, 10000);
    }, []);

    function updateCount() {
        setCount(Math.floor(Math.random() * 100));
    }

    return (
        <div>
            <button onClick={updateCount}>Update Todos</button>
            <Todos title={todos.title} completed={todos.completed} id={todos.id} />
            {render ? <MyComponent /> : ""}
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

/*
    useEffect can return a function
    -------------------------------

    once the dependency changes, it will first console.log("unmounted") as it will do the cleanup activity first from the last dependency
    then "mounted" will be logged.

    But initially on 1st dependency, "mounted" will be logged as there is no previous dependency.
*/

function MyComponent() {

    useEffect(() => {
        console.log("mounted");

        return () => {
            console.log("unmounted");
        }
    }, []);

    return <div>
        Component rendered
    </div>
}