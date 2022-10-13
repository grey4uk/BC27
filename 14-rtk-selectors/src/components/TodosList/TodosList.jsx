// import { useDispatch,
//    useSelector
//    } from 'react-redux';

import { ReactComponent as DeleteImg } from 'images/delete.svg';
// import {
//   deleteTodoOperation,
//   updateTodoOperation,
// } from 'redux/todos/todosOperations';
import {
  useLazyGetTodosQuery,
  // useGetTodosQuery,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from 'redux/todosApi/todosApi';
import { useEffect } from 'react';

const TodosList = ({ filter }) => {
  // const dispatch = useDispatch();

  // const {
  //   data: todos,
  //   isFetching,
  // } = useGetTodosQuery(null,{skip:true});

  const [
    getTodos,
    { data: todos, isFetching: getTodosLoading },
  ] = useLazyGetTodosQuery();
  const [updateTodo, { isFetching: updateTodoLoading }] =
    useUpdateTodoMutation();
  const [deleteTodo, { isFetching: deleteTodoLoading }] =
    useDeleteTodoMutation();

  useEffect(() => {
    getTodos();
  }, [getTodos]);
  // const { todos } = useSelector((state) => state);

  const toggleIsDone = (id) => {
    const dataTodo = todos.find((el) => el.id === id);
    updateTodo({
      ...dataTodo,
      isDone: !dataTodo.isDone,
    });
    // dispatch(
    //   updateTodoOperation({
    //     ...dataTodo,
    //     isDone: !dataTodo.isDone,
    //   })
    // );
  };

  const handleDeleteTodo = (id) => {
    // dispatch(deleteTodoOperation(id));
    deleteTodo(id);
  };

  const filteredTodos = filter
    ? todos.filter((el) =>
        el.title
          .toLowerCase()
          .includes(filter.toLowerCase())
      )
    : todos;

  console.log('todos', todos);
  return (
    <>
      {getTodosLoading && <h1>Loading...</h1>}
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
                checked={el.isDone}
                onChange={() => toggleIsDone(el.id)}
              />
            </label>

            {deleteTodoLoading ? (
              <p>Deleting...</p>
            ) : (
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
            )}
          </li>
        ))}
      </ol>
    </>
  );
};

export default TodosList;
