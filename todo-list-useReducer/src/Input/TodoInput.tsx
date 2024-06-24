import React, {ChangeEvent, FormEvent} from "react";
import css from './TodoInput.module.css';
import { RiChatNewLine } from "react-icons/ri";

type TodoInputProps = {
  text: string;
  onTextChange: (text:string) => void
  onSubmit: () => void
}

const TodoInput = (props:TodoInputProps) => {
  const handleInputChanged = (e:ChangeEvent<HTMLInputElement>) => {
    props.onTextChange(e.target.value)
  }

  const handleSubmit = (e:FormEvent) => {
    // submit 액션은 페이지를 재 호출하기에 막아야함
    e.preventDefault();
    props.onSubmit()
  }

  return (
    <section className={css.container}>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <input className={css.input} value={props.text} onChange={handleInputChanged}/>
        <button type='submit' className={css.enter} disabled={!props.text}><RiChatNewLine/></button>
      </form>
    </section>
  )
}

export default TodoInput
