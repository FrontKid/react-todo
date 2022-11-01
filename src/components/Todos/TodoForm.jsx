import { useState } from 'react'
import style from './TodoForm.module.scss'

const TodoForm = ({ addTodo }) => {
  const [userText, setUserText] = useState('')

  const onSubmitHandler = e => {
    e.preventDefault()
    addTodo(userText)
    setUserText('')
  }

  return (
    <form className={style.form} onSubmit={onSubmitHandler}>
      <input
        className={style.form__input}
        type="text"
        placeholder='Enter new todo'
        value={userText}
        onChange={e => setUserText(e.currentTarget.value)}
      />
      <button className={style.form__button} type='submit'>Submit</button>
    </form>
  )
}

export default TodoForm
