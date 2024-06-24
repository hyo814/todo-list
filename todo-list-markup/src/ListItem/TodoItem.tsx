import css from './TodoItem.module.css'
import { BsCheckCircle } from 'react-icons/bs'
import { IoIosRemoveCircleOutline } from 'react-icons/io'

const TodoItem = () => {
  const isChecked = true;
  return (
    <li className={css.container}>
      <BsCheckCircle className={isChecked ? css.checkedCircleIcon : css.unCheckedCircleIcon}/>
      <span className={isChecked ? css.strikethrough : ''}>테스트</span>
      <IoIosRemoveCircleOutline className={css.removeIcon}/>
    </li>
  )
}

export default TodoItem
