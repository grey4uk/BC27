import { useRef, useState, useEffect } from 'react';

import { useValue } from 'hooks/useValue';
import s from './App.module.css';
import Form from 'components/Form/Form';

const App = () => {
  const { value, changeValue } = useValue(null);
  const [name, setName] = useState('');
  const inputRef = useRef(document.querySelector('body'));
  // const inputRef = useRef(value);
  // console.log('ref :>> ', ref);
  // console.log('value', value);

  useEffect(() => {
    console.log('inputRef :>> ', inputRef);
    inputRef.current.className = s.input;
    inputRef.current.focus();
    // inputRef.current.style.background = 'red';
  }, []);

  const onChange = (e) => {
    const a = e.target.value;

    changeValue(a);
  };

  return (
    <>
      <form>
        <input
          type='text'
          onChange={onChange}
          value={value ?? ''}
          placeholder='Enter random number'
        />
        <input
          ref={inputRef}
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder='Enter random string'
        />
      </form>
      <Form />
    </>
  );
};

export default App;
