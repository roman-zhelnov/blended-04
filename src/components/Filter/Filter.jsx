import { useDispatch } from 'react-redux';
import style from './Filter.module.css';
import { setFilter } from 'reduxTodo/todoFilter';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      className={style.input}
      onChange={e => dispatch(setFilter(e.target.value))}
      placeholder="Find it"
      name="filter"
    />
  );
};
