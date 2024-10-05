import { useState } from "react";

function Todo() {

    const [todos, setTodos] = useState([
        {
            title: 'Gym',
            description: '7-9',
            completed: false,
        },
        {
            title: 'DSA',
            description: '5-6',
            completed: false,
        }
    ]);

    function addTodo() {
        setTodos([...todos, {
            title: 'New Todo',
            description: 'new',
        }]);
    }

    return (
        <div>
            {/* // {todos} // wont work as it is an array, so we need to stringify it atleast */}
            {/* {JSON.stringify(todos)}; */}
            <button onClick={addTodo}>Add Todo</button>
            {todos.map(
                (val) => {
                    return <TodoComponent title={val.title} description={val.description} />
                }
            )
            }

        </div>
    )
}

// component

// takes title, description

function TodoComponent(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.description}</h1>
        </div>
    )
}

export default Todo;