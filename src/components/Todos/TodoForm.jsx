//react state for input
import { useState } from 'react'
//styles
import style from './TodoForm.module.scss'
//UI button component
import Button from '../UI/Button'

const TodoForm = ({ addTodo }) => { // accepts user text
  //for controled input
  const [userText, setUserText] = useState('')

  //add user task after pressed button "add task" and clear field
  const onSubmit = e => {
    e.preventDefault()
    addTodo(userText)
    setUserText('')
  }

  //input field render
  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        className={style.form__input}
        type="text"
        placeholder='Enter new todo'
        value={userText}
        onChange={e => setUserText(e.currentTarget.value)}
      />
      <Button className={style.form__button} title="sub" type='submit'>Add task</Button>
    </form>
  )
}

export default TodoForm
