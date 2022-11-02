//todo
import Todo from "./Todo";
//styles
import style from './TodoList.module.scss'

const TodoList = ({ userTodo, deleteTodo, toggleTodo }) => {// array with objects of user info, delete button,
  //delete completed button

  //render todo list 
  return (
    <div className={style.todoList}>
      {!userTodo.length && <h2>This list is empty</h2>}
      {userTodo.map(todo => <Todo
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo} />)}
    </div>
  )
}

export default TodoList