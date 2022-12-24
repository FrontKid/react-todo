//react
import React from 'react'
import { useSelector } from 'react-redux'

//selectors
import { todoSelector } from '../../redux/features/todo/selectors'

const CompletedTodos: React.FC = () => {
  const { userTodos } = useSelector(todoSelector)
  const completedTodosCount = userTodos.filter(todo => todo.isDone).length

  return (
    <>
      {!!completedTodosCount &&
        <h2>
          {`You have completed ${completedTodosCount} ${completedTodosCount > 1
            ? 'todos'
            : 'todo'}`}
        </h2>}
    </>
  )

}

export default CompletedTodos