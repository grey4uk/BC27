import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as DeleteImg } from 'images/delete.svg';
import {
  deleteTodoOperation,
  updateTodoOperation,
} from 'redux/todos/todosOperations';
import {
  getTodosSelector,
  getFilteredTodosSelector,
} from 'redux/todos/todosSelectors';

const TodosList = ({ filter }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) =>
    getTodosSelector(state)
  );
  const filteredTodos = useSelector(
    getFilteredTodosSelector(filter)
  );

  const toggleIsDone = (id) => {
    const dataTodo = todos.find((el) => el.id === id);
    dispatch(
      updateTodoOperation({
        ...dataTodo,
        isDone: !dataTodo.isDone,
      })
    );
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodoOperation(id));
  };

  return (
    <ol
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10',
      }}>
      {filteredTodos?.map((el) => (
        <li
          key={el.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            background: el.isDone ? 'green' : 'red',
            borderRadius: '8px',
            padding: '10px',
          }}>
          <div>
            <span>{el.title}</span>
            <span> - </span>
            <span>{el.desc}</span>
          </div>
          <label>
            Done
            <input
              type='checkbox'
              value={el.isDone}
              onChange={() => toggleIsDone(el.id)}
            />
          </label>

          <button
            type='button'
            onClick={() => handleDeleteTodo(el.id)}>
            <DeleteImg
              style={{
                width: '32px',
                height: '32px',
                fill: 'red',
              }}
            />
          </button>
        </li>
      ))}
    </ol>
  );
};

export default TodosList;
