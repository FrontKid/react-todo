//react
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//types
import { ITodoStates, TUserTodos } from "./types";

const initialState: ITodoStates = {
  userTodos: [],
  userText: '',
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setUserTodos(state, action: PayloadAction<TUserTodos[]>) {
      if (state.userText) {
        state.userTodos = action.payload
      }
    },
    setUserText(state, action: PayloadAction<string>) {
      state.userText = action.payload
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.userTodos = state.userTodos.filter(deletedTodo => deletedTodo.id !== action.payload)
    },
    toggleTodo(state, action: PayloadAction<string>) {
      state.userTodos = state.userTodos.map(item => item.id === action.payload
        ? { ...item, isDone: !item.isDone }
        : { ...item })
    },
    resetTodos(state) {
      state.userTodos = []
    },
    deleteCompletedTodos(state) {
      state.userTodos = state.userTodos.filter(todo => !todo.isDone)
    }
  }
})

export const {
  setUserTodos,
  setUserText,
  deleteTodo,
  toggleTodo,
  resetTodos,
  deleteCompletedTodos
} = todoSlice.actions
export default todoSlice.reducer