import { useState, useEffect, useTransition } from "react";

export function CustomUseTodos() {
    const { todos, loading } = useTodos();

    return (
        <>
            {loading ? "Loading..." : todos.title}
        </>
    )

}

export function useTodos() {

    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        const interval = setInterval(() => {

            setCount(Math.floor(Math.random() * 10) + 1);
            fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
                .then(async (res) => {
                    const json = await res.json();
                    console.log("JSON: ", json.title);
                    setTodos(json);
                    setLoading(false);
                })
        }, 3000);

        return () => clearInterval(interval);
    }, [count]);

    return { todos, loading };

}