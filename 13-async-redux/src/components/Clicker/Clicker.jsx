import { useDispatch, useSelector } from 'react-redux';
import { click } from 'redux/click/clickSlice';
import { getCounterSelector } from 'redux/todos/todosSelectors';
const Clicker = () => {
  const dispatch = useDispatch();
  const counter = useSelector(getCounterSelector);
  return (
    <div>
      <p>{counter}</p>
      <button
        type='button'
        onClick={() => dispatch(click())}>
        Click
      </button>
    </div>
  );
};

export default Clicker;
