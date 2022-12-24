//react
import React from "react"
import { useSelector } from 'react-redux'

//selectors
import { todoSelector } from "./redux/features/todo/selectors";

//components
import TodoForm from './components/Todos/TodoForm';
import TodoList from "./components/Todos/TodoList";
import CompletedTodos from "./components/Todos/CompletedTodos";
import TodosEctions from "./components/Todos/TodosEctions";

//styles
import './App.scss';

function App() {
  const { userTodos } = useSelector(todoSelector)

  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoForm />
      {!!userTodos.length &&
        (<TodosEctions />)}
      <TodoList />
      <CompletedTodos />
    </div>
  );
}

export default App;
