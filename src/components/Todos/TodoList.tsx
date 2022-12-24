//react
import React from "react";
import { useSelector } from 'react-redux'

//components
import Todo from "./Todo";

//selectors
import { todoSelector } from "../../redux/features/todo/selectors";

//styles
import style from './TodoList.module.scss'

const TodoList: React.FC = () => {
  const { userTodos } = useSelector(todoSelector)

  return (
    <div className={style.todoList}>
      {!userTodos.length && <h2>This list is empty</h2>}
      {userTodos.map(todo => <Todo
        key={todo.id}
        {...todo}
      />)}
    </div>
  )
}

export default TodoList