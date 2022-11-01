import style from './Todo.module.scss'
import { SiTodoist } from 'react-icons/si'
const Todo = ({ todo, index, deleteTodo }) => {
  return (

    <div
      className={style.todo}
      onDoubleClick={() => deleteTodo(index)}
    >
      <SiTodoist className={style.todoIcon} />
      <h3 className={style.todoText}>{todo}</h3>
    </div>
  )
}

export default Todo