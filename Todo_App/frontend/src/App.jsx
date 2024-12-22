import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos, setTodos] = useState([]);

  //bad way to fetch
  // because once 'setTodos' is called, it re-renders the 'App' and again 'fetch' is called. Kind of an infinite loop
  // Solution: useEffect hook
  fetch("http://localhost:3000/todos").then(async (res) => {
    const json = await res.json();
    setTodos(json.todos);
  });
  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App
