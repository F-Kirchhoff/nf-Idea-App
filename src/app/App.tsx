import React, { useState } from 'react'
import Title from './components/Title/Title'
import Todo from './components/Todo/Todo'

import classes from './App.module.css'

type todoElement = {
  isDone: boolean
  title: string
  description: string
}

function App(): JSX.Element {
  const [todos, setTodos] = useState([
    {
      isDone: true,
      title: 'Learn React',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
    {
      isDone: false,
      title: 'Learn more React',
      description: 'lorem lorem lorem lorem lorem lorem lorem lorem ',
    },
  ])

  function handleClick(id: number) {
    const newTodos = [...todos]
    newTodos[id].isDone = !todos[id].isDone
    setTodos(newTodos)
  }

  function renderTodo(todo: todoElement, id: number) {
    return <Todo options={todo} onClick={() => handleClick(id)} />
  }

  return (
    <div className={classes.app}>
      <Title>Remember Me</Title>
      <ul className={classes.todoContainer}>{todos.map(renderTodo)}</ul>
    </div>
  )
}

export default App
