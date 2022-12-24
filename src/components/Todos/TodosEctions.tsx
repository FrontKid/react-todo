//react
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

//icons
import { MdDeleteForever } from 'react-icons/md'
import { BiReset } from 'react-icons/bi'

//UI components
import Button from '../UI/Button'

//slices
import { resetTodos, deleteCompletedTodos } from '../../redux/features/todo/slice'

//selectors
import { todoSelector } from '../../redux/features/todo/selectors'

//styles
import style from './TodosEctions.module.scss'

const TodosEctions: React.FC = () => {
  const { userTodos } = useSelector(todoSelector)
  const dispatch = useDispatch()
  const completedTodosCount = userTodos.filter(todo => todo.isDone).length

  return (
    <div className={style.todoActionsContainer}>
      <Button
        title="Delete completed todos"
        onClick={() => dispatch(deleteCompletedTodos())} disabled={!completedTodosCount}><MdDeleteForever /></Button>
      <Button
        title="Reset todos"
        onClick={() => dispatch(resetTodos())}><BiReset /></Button>
    </div>
  )
}

export default TodosEctions