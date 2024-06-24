import css from './TodoListTools.module.css'
import { MdDelete } from 'react-icons/md'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'
import { CgRadioCheck } from 'react-icons/cg'

const TodoListTools = () => {
  const isAllChecked = true

  return (
    <footer className={css.container}>
      <button className={css.button}>
        {
          isAllChecked ? (
            <>
              <CgRadioCheck className={css.checkAllIcon} />
              <span>전체해제</span>
            </>
          ) : (
            <>
              <IoCheckmarkDoneCircleOutline className={css.checkAllIcon} />
              <span>전체완료</span>
            </>
          )
        }
      </button>
      <button className={[css.button, css.removeAllButton].join(' ')}>
        <MdDelete className={css.checkAllIcon} />
        <span>전체삭제</span>
      </button>
    </footer>
  )
}

export default TodoListTools