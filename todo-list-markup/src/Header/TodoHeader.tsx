import React from "react";
import css from './TodoHeader.module.css'

const TodoHeader = () => {
  return (
    <header>
      <h1 className={css.headerTitle}>
        <mark className={css.todoCount}>3</mark>
        개의 할일
      </h1>
    </header>
  )
}

export default TodoHeader
