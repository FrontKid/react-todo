//icons
import { SiTodoist } from 'react-icons/si'
import { TiDelete } from 'react-icons/ti'
import { BsCheckLg } from 'react-icons/bs'
//css rules
import style from './Todo.module.scss'

//todo item
const Todo = (props) => {
  //button props for delete todo or toggle checking task
  const { deleteTodo, toggleTodo } = props

  //checker, users text, and id for React-do
  const { isDone, text, id } = props.todo

  //user task area
  return (
    <div className={`${style.todo} ${isDone && style.completedTodo}`}>
      <SiTodoist className={style.todoIcon} />
      <h3 className={style.todoText}>{text}</h3>
      <TiDelete className={style.deleteIcon} onClick={() => deleteTodo(id)} />
      <BsCheckLg className={style.checkIcon} onClick={() => toggleTodo(id)} />
    </div>
  )
}
export default Todo