import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const todosReducer = slice.reducer;
export const { addTodo, deleteTodo } = slice.actions;

export const selectTodos = state => state.todos.items;
