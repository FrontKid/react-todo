import Todo from "./Todo";
import style from './TodoList.module.scss'

const TodoList = ({ userTodo, deleteTodo }) => {
  return (
    <div className={style.todoList}>
      {!userTodo.length && <h2>This list is empty</h2>}
      {userTodo.map((todo, i) => <Todo key={i} index={i} todo={todo} deleteTodo={deleteTodo} />)}
    </div>
  )
}

export default TodoList