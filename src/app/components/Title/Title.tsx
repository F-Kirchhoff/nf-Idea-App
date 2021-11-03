import type { ReactNode } from 'react'
import React from 'react'
import classes from './Title.module.css'

type TitleProps = {
  children: ReactNode
}

function Title(props: TitleProps): JSX.Element {
  return <h1 className={classes.title}>{props.children}</h1>
}

export default Title
