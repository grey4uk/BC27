import { useReducer } from 'react';

const initialState = { name: '', email: '' };

const types = {
  NAME: 'NAME',
  EMAIL: 'EMAIL',
  RESET: 'RESET',
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.NAME:
      //     case 'NAME':
      return { ...state, name: payload };
    case types.EMAIL:
      //     case 'EMAIL':
      return { ...state, email: payload };
    case types.RESET:
      //     case 'RESET':
      return initialState;
    //       return { name: '', email: '' };

    default:
      return state;
  }
};

const Form = () => {
  // const[state,setState]=useState(initialState);
  // setState({...state,name:'iiii'})
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  console.log('state', state);
  const { name, email } = state;

  const onChange = ({ target: { name, value } }) => {
    dispatch({ type: name, payload: value });
  };

  return (
    <form>
      <label>
        Name
        <input
          type='text'
          name={types.NAME}
          //   name='NAME'
          placeholder=''
          value={name}
          onChange={onChange}
        />
      </label>
      <label>
        Email
        <input
          type='text'
          name={types.EMAIL}
          //   name='EMAIL'
          placeholder=''
          value={email}
          onChange={onChange}
        />
      </label>
    </form>
  );
};

export default Form;
