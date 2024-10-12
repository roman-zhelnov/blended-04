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
  },
});

export const todosReducer = slice.reducer;
export const { addTodo } = slice.actions;

export const selectTodos = state => state.todos.items;
