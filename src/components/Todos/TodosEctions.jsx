//icons delete completed and reset application
import { MdDeleteForever } from 'react-icons/md'
import { BiReset } from 'react-icons/bi'
//styles
import style from './TodosEctions.module.scss'
//UI button component
import Button from '../UI/Button'

const TodosEctions = ({ deleteCompletedTodos, resetTodo, completedTodoExist }) => {//two buttons for reset app and delete
  //completed tasks and checker for completed tasks

  //render two button top of list if there are some tasks
  return (
    <div className={style.todoActionsContainer}>
      <Button
        title="Delete completed todos"
        onClick={deleteCompletedTodos} disabled={!completedTodoExist}><MdDeleteForever /></Button>
      <Button
        title="Reset todos"
        onClick={resetTodo}><BiReset /></Button>
    </div>
  )
}

export default TodosEctions