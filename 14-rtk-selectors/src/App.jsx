import {
  useState,
  //  useEffect
} from 'react';
import { ToastContainer } from 'react-toastify';
// import { useDispatch } from 'react-redux';

import { TodoForm } from './components/TodoForm';
import FilterTodos from 'components/FilterTodos';
import TodosList from 'components/TodosList';
// import { getTodosOperation } from 'redux/todos/todosOperations';

const App = () => {
  const [state, setState] = useState({ value: '' });

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (state.value.length < 3) return;
  //   console.log('YAHOO!!!');
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [state]);

  const onChange = (e) =>
    setState({ value: e.currentTarget.value });

  const { value } = state;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
        width: '80vw',
        gap: '40px',
      }}>
      <TodoForm />
      <FilterTodos onChange={onChange} value={value} />
      <TodosList filter={value} />
      <ToastContainer />
    </div>
  );
};

export default App;
