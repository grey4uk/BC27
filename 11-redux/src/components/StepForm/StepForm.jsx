// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setStep } from 'redux/actions/actions';

const StepForm = () => {
  //   const [value, setValue] = useState(1);
  const state = useSelector((state) => state);
  const { step } = state;
  const dispatch = useDispatch();

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     dispatch(setStep(Number(value)));
  //   };

  return (
    //     <form onSubmit={onSubmit}>
    <form>
      <input
        type='number'
        placeholder='Choose step for counter'
        // value={value}
        value={step}
        // onChange={(e) => setValue(e.target.value)}
        onChange={(e) => dispatch(setStep(e.target.value))}
      />
      <button type='submit'>set step</button>
    </form>
  );
};

export default StepForm;
