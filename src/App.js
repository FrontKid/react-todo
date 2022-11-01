import { useState } from "react"
import TodoForm from './components/Todos/TodoForm';
import TodoList from "./components/Todos/TodoList";
import './App.css';

function App() {
  const [userTodo, setUserTodo] = useState([])

  const addTodoHandler = text => {
    setUserTodo([text, ...userTodo])
  }

  const deleteTodoHendler = (i) => {
    setUserTodo(userTodo.filter(($, idI) => idI !== i))
  }

  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        userTodo={userTodo}
        deleteTodo={deleteTodoHendler} />
    </div>
  );
}

export default App;
