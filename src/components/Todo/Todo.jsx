import { GridItem, Text } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo, changeCurrentTodo } from 'reduxTodo/todoSlice';

export const Todo = ({ todo, counter }) => {
  const dispatch = useDispatch();

  const handleDell = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleClick = () => {
    dispatch(changeCurrentTodo(todo));
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {counter + 1}
        </Text>

        <Text>{todo.text}</Text>
        <button
          className={style.deleteButton}
          onClick={handleDell}
          type="button"
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          className={style.editButton}
          type="button"
          onClick={handleClick}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
