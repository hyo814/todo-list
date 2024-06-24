import css from './TodoList.module.css'
import TodoItem from "../ListItem/TodoItem";

const TodoList = () => {
  const arr = ['1', '2', '3']
  return (
    <section>
    <ol className={css.container}>
      {
        arr.map(item => (
          <TodoItem key={item} />
        ))
      }
    </ol>
    </section>
  )
}

export default TodoList
