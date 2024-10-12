import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      {todos.length === 0 && (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
      <Grid>
        {todos.map((todo, index) => (
          <Todo key={todo.id} todo={todo} counter={index} />
        ))}
      </Grid>
    </>
  );
};
