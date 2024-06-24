import React, {Reducer, useReducer } from 'react';
import './App.css';
import TodoList from "./List/TodoList";
import TodoInput from "./Input/TodoInput";
import TodoHeader from "./Header/TodoHeader";
import Divider from "./Divider/Divider";
import {initialTodoState, TodoActionType, todoReducer, TodoStateType} from "./Todo/todoReducer";
import {
  initialTodoInputState,
  TodoInputActionType,
  todoInputReducer,
  TodoInputStateType
} from "./Todo/todoInputReducer";
import TodoListTools from './Tools/TodoListTools';
import TodoListArea from './List/TodoListArea';

// 할일 목록 보기
// 목록 아이템 삭제
// 목록 아이템 수정 (내용 및 상태)
// 목록 아이템 추가

// useReducer - 상태 로직을 컴포넌트에서 분리 가능

function App() {
  const [inputState, inputDispatch] = useReducer<Reducer<TodoInputStateType, TodoInputActionType>>(todoInputReducer, initialTodoInputState)
  const [todoState, todoDispatch] = useReducer<Reducer<TodoStateType, TodoActionType>>(todoReducer, initialTodoState);

  const handleTextChange = (text:string) => {
    inputDispatch({
      type: 'change',
      payload: text
    })
  }

  const handleSubmit = () => {
    todoDispatch({
      type: 'add',
      payload: { text: inputState.text }
    })
    inputDispatch({
      type: 'clear'
    })
  }

  const handleToggleClick = (id:number) => {
    todoDispatch({
      type: 'checked',
      payload: {
        id
      }
    })
  }

  const handleRemoveClick = (id:number) => {
    todoDispatch({
      type: 'remove',
      payload: {
        id
      }
    })
  }

  return (
    <main className="App">
      <TodoHeader count={todoState.todos.filter(todo => !todo.isChecked).length}/>
      <TodoInput text={inputState.text} onTextChange={handleTextChange} onSubmit={handleSubmit}/>
      <TodoListArea todoCount={todoState.todos.length}>
        <TodoListTools />
        <Divider />
        <TodoList todos={todoState.todos} onToggleClick={handleToggleClick} onRemoveClick={handleRemoveClick}/>
      </TodoListArea>
    </main>
  );
}

export default App;
