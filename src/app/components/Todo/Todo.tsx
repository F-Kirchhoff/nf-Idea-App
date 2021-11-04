import React from 'react'
import classes from './Todo.module.css'

type TodoProps = {
  options: {
    isDone: boolean
    title: string
    description: string
  }
  onClick: () => void
}

function Todo({ options, onClick }: TodoProps): JSX.Element {
  return (
    <li className={`${classes.todo}`}>
      <div
        className={`${classes.todo__flag} ${
          options.isDone && classes.todo__flagDone
        }`}
      ></div>
      <h1 className={classes.todoTitle}>{options.title}</h1>
      <p>{options.description}</p>
      <button onClick={onClick}>mark as done</button>
    </li>
  )
}

export default Todo
