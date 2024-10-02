import { useState } from "react";

function Todo() {

    const [todos, setTodos] = useState([
        {
            titie: 'Gym',
            desc: '7-9',
            completed: false,
        },
        {
            titie: 'DSA',
            desc: '5-6',
            completed: false,
        }
    ]);

    return (
        <div>
            {/* // {todos} // wont work as it is an array, so we need to stringify it atleast */}
            {JSON.stringify(todos)};
        </div>
    )
}

export default Todo;