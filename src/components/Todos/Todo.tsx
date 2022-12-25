//react
import React from 'react'
import { useDispatch } from 'react-redux'

//icons
import { SiTodoist } from 'react-icons/si'
import { TiDelete } from 'react-icons/ti'
import { BsCheckLg } from 'react-icons/bs'

//slices
import { deleteTodo, toggleTodo } from '../../redux/features/todo/slice'

//types
import { TUserTodos } from '../../redux/features/todo/types'

//styles
import style from './Todo.module.scss'

const Todo: React.FC<TUserTodos> = ({ isDone, userText, id }) => {
  const dispatch = useDispatch()

  return (
    <div className={`${style.todo} ${isDone && style.completedTodo}`}>
      <SiTodoist className={style.todoIcon} />
      <h3 className={style.todoText}>{userText}</h3>
      <TiDelete className={style.deleteIcon} onClick={() => dispatch(deleteTodo(id as string))} />
      <BsCheckLg className={style.checkIcon} onClick={() => dispatch(toggleTodo(id as string))} />
    </div>
  )
}
export default Todo