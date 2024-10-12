import { Grid, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter } from 'reduxTodo/todoFilter';
import { selectTodos } from 'reduxTodo/todoSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const filterData = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      {filterData.length === 0 && (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
      <Grid>
        {filterData.map((todo, index) => (
          <Todo key={todo.id} todo={todo} counter={index} />
        ))}
      </Grid>
    </>
  );
};
