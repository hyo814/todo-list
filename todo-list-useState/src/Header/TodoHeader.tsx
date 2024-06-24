import React from "react";
import css from './TodoHeader.module.css'

type TodoHeaderProps = {
  count: number
}

const TodoHeader = (props:TodoHeaderProps) => {
  return (
    <header>
      <h1 className={css.headerTitle}>
        <mark className={css.todoCount}>{props.count}</mark>
        개의 할일
      </h1>
    </header>
  )
}

export default TodoHeader
