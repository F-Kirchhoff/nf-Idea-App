import React from 'react'

import Button from './components/Button/Button'
import Title from './components/Title/Title'

import classes from './App.module.css'

function App(): JSX.Element {
  return (
    <div className={classes.app}>
      <Title>Lorem2000</Title>
      <Button>Hello</Button>
    </div>
  )
}

export default App
