//state user task when button was pressed
import { useState } from "react"
//get random key for components
import { v4 as randomId } from 'uuid';
//input component
import TodoForm from './components/Todos/TodoForm';
//List of user tasks
import TodoList from "./components/Todos/TodoList";
//two buttons reset and delete completed
import TodosEctions from "./components/Todos/TodosEctions";
//styles
import './App.scss';

function App() {
  //state for save user data
  const [userTodo, setUserTodo] = useState([])

  //update user tasks list
  const addTodo = text => {
    //data with user info
    const newTodo = {
      text,
      isDone: false,
      id: randomId(),
    }
    console.log(newTodo);

    //set user data and add new text
    setUserTodo([newTodo, ...userTodo])
  }

  //delete todo by pressed button into user task area
  const deleteTodo = id => {// id for check the field that was clicked
    //rerender tasks list by the condition that area id not
    setUserTodo(userTodo.filter(newTodo => newTodo.id !== id))
  }

  //checked check mark for completed or uncompleted state
  const toggleTodo = id => {// id for adding new state for isDone
    //rerender list for completed/uncompleted state
    setUserTodo(userTodo.map(newTodo => newTodo.id === id
      ? { ...newTodo, isDone: !newTodo.isDone }
      : { ...newTodo }))
  }


  //delete all tasks
  const resetTodo = () => {
    //rerender user list
    setUserTodo([])
  }

  //check and delete only completed
  const deleteCompletedTodos = () => {
    //if user has completed task this button delete it
    setUserTodo(userTodo.filter(todo => !todo.isDone))
  }

  //comoleted task counter
  const completedTodosCount = userTodo.filter(todo => todo.isDone).length


  //render all application with condition
  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoForm addTodo={addTodo} />
      {!!userTodo.length &&
        (<TodosEctions
          completedTodoExist={!!completedTodosCount}
          deleteCompletedTodos={deleteCompletedTodos}
          resetTodo={resetTodo} />)}
      <TodoList
        userTodo={userTodo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo} />

      {!!completedTodosCount &&
        <h2>
          {`You have completed ${completedTodosCount} ${completedTodosCount > 1
            ? 'todos'
            : 'todo'}`}
        </h2>}
    </div>
  );
}

export default App;
