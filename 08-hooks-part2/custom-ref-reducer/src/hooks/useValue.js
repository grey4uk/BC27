import { useState, useEffect } from 'react';

export const useValue = (init) => {
  const [value, setValue] = useState(() => init);

  useEffect(() => {
    //     console.log('value', typeof value);
    switch (value) {
      case typeof value === 'number':
        localStorage.setItem(
          'number',
          JSON.stringify(value)
        );
        break;
      case typeof value === 'string':
        localStorage.setItem(
          'string',
          JSON.stringify(value)
        );
        break;

      default:
        localStorage.setItem(
          'value',
          JSON.stringify(value)
        );
        break;
    }
    //     localStorage.setItem('value', JSON.stringify(value));
  }, [value]);

  const changeValue = (a) => setValue(a);

  return { value: value, changeValue: changeValue };
};
