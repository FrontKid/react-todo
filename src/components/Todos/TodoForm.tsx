//react state for input
import React, { FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as randomId } from 'uuid';

//UI components
import Button from '../UI/Button'

//selectors
import { todoSelector } from "../../redux/features/todo/selectors";

//slieces
import { setUserTodos, setUserText } from "../../redux/features/todo/slice";

//styles
import style from './TodoForm.module.scss'

const TodoForm: React.FC = () => {
  const { userTodos, userText } = useSelector(todoSelector)
  const dispatch = useDispatch()

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newTodo = {
      userText,
      isDone: false,
      id: randomId(),
    }

    dispatch(setUserTodos([newTodo, ...userTodos]))
    dispatch(setUserText(''))
  }

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        className={style.form__input}
        type="text"
        placeholder='Enter new todo'
        value={userText}
        onChange={(e: FormEvent<HTMLInputElement>) => dispatch(setUserText(e.currentTarget.value as string))}
      />
      <Button className={style.form__button} title="sub" type='submit'>Add task</Button>
    </form>
  )
}

export default TodoForm
