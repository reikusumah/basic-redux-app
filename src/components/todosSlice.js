import { createSlice } from "@reduxjs/toolkit";
import todosData from "../data/todos.json";

const initialState = todosData;

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    listTodos: (state) => {
      return state.todos.todos;
    },
    addTodos: (state, action) => {
      const newItem = {
        id: state.todos.length + 1,
        title: action.payload,
      };
      return {
        ...state.todos,
        todos: [...state.todos, newItem],
      };
    },
    removeTodos: (state, action) => {
      return {
        ...state.todos,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    },
  },
});

export const { listTodos, addTodos, removeTodos } = todosSlice.actions;

export default todosSlice.reducer;
