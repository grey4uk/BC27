import {
  useSelector,
  useDispatch,
  // connect,
} from 'react-redux';
import Button from 'components/Button/Button';

import {
  increment,
  decrement,
  reset,
} from './redux/actions/actions';
import StepForm from './components/StepForm/StepForm';

const App = () => {
  const {
    step,
    main: { count },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const prepearedStep = Number(step);

  // console.log('store.getState() :>> ', store.getState());

  const incrementClick = () => {
    // dispatch({ type: "INCREMENT_TYPE" });
    dispatch(increment(prepearedStep));
  };
  const decrementClick = () => {
    // dispatch({ type: "DECREMENT_TYPE" });
    dispatch(decrement());
  };
  const resetClick = () => {
    // dispatch({ type: "DECREMENT_TYPE" });
    dispatch(reset());
  };

  return (
    <>
      <StepForm />
      <Button title='-' onClick={decrementClick} />
      <h1> {count}</h1>
      <Button title='+' onClick={incrementClick} />

      <button type='button' onClick={resetClick}>
        RESET
      </button>
    </>
  );
};

export default App;
// export default connect(mapStateToProps,mapDispatchToProps)(App);
