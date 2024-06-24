export type TodoType = {
  id: number
  text:string
  isChecked: boolean
}

export type TodoStateType = {
  todos: TodoType[]
}

export type TodoActionType = {
  type: 'add'
  payload: {
    text: string
  }
} | {
  type: 'remove',
  payload: {
    id: number
  }
} | {
  type: 'checked',
  payload: {
    id: number
  }
}

export const initialTodoState = {
  todos: []
};

export const todoReducer = (state:TodoStateType, action: TodoActionType) => {
  switch (action.type) {
    case 'add':
      return {
        todos: state.todos.concat({
          id: Date.now(),
          text: action.payload.text,
          isChecked: false
        })
      };
    case 'checked':
      return {
        todos: state.todos.map(todo => {
          if(todo.id === action.payload.id) {
            return {
              ...todo,
              isChecked: !todo.isChecked
            }
          }

          return todo
        })
      };
    case 'remove':
      return {
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload.id
        })
    }
    default:
      throw new Error();
  }
}
