import { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoOperation } from 'redux/todos/todosOperations';
import { toast } from 'react-toastify';
import {
  useAddTodoMutation,
  useGetTodosQuery,
} from 'redux/todosApi/todosApi';

const categories = ['home', 'buy', 'study'];

const INITIAL_STATE = {
  title: '',
  desc: '',
  agree: false,
  priority: 'Low',
  category: categories[0],
  isDone: false,
};

const titleId = uuid();
const descId = uuid();

const TodoForm = () => {
  // const dispatch = useDispatch();
  // const { todos, todosLoading } = useSelector(
  //   (state) => state
  // );
  const [state, setState] = useState(INITIAL_STATE);
  const [addTodo, { isLoading: todosLoading, isError }] =
    useAddTodoMutation();
  const { data: todos, isFetching: getTodosLoading } =
    useGetTodosQuery();

  useEffect(() => {
    !isError && reset();
  }, [isError]);

  const onChangeInput = (e) => {
    const { target } = e;
    const { value, name } = target;

    setState({ ...state, [name]: value });
  };

  const reset = () => {
    setState(INITIAL_STATE);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    const isDuplicate = todos.find(
      (el) =>
        el.title.toLowerCase() === state.title.toLowerCase()
    );

    if (isDuplicate) {
      toast(
        `Task with title - ${isDuplicate.title} already exist 🦄 `,
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );

      return;
    }

    // dispatch(
    //   addTodoOperation({
    //     todo: state,
    //     reset,
    //   })
    // );
    addTodo(state);
  };

  const { title, desc, agree, priority, category } = state;
  return (
    // <form>
    //         <input type="text" /><input type="text" />
    //         <button></button>
    // </form>
    <Form onSubmit={onSubmitForm}>
      <Form.Group className='mb-3' controlId={titleId}>
        <Form.Label>Title of task</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter title of task'
          name='title'
          value={title}
          onChange={onChangeInput}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId={descId}>
        <Form.Label style={{}}>Task description</Form.Label>
        <Form.Control
          type='text'
          name='desc'
          value={desc}
          placeholder='Enter description of task'
          onChange={onChangeInput}
        />
      </Form.Group>
      <Form.Group
        className='mb-3'
        controlId='formBasicCheckbox'>
        <Form.Check
          type='checkbox'
          label='Agree with privacy policy'
          name='agree'
          value={agree}
          //     checked={`${agree}`}
          onChange={onChangeInput}
        />
      </Form.Group>
      <Form.Group
        style={{ display: 'flex' }}
        className='mb-3'
        controlId='formBasicRadiobox'>
        <Form.Label>Choose priority</Form.Label>
        <Form.Check
          type='radio'
          label='Low'
          value='Low'
          name='priority'
          checked={'Low' === priority}
          onChange={onChangeInput}
        />
        <Form.Check
          type='radio'
          label='Medium'
          name='priority'
          value='Medium'
          checked={'Medium' === priority}
          onChange={onChangeInput}
        />
        <Form.Check
          type='radio'
          label='Height'
          name='priority'
          value='Height'
          checked={'Height' === priority}
          onChange={onChangeInput}
        />
      </Form.Group>
      <Form.Select
        aria-label='Default select example'
        name='category'
        onChange={onChangeInput}>
        <option>Open this select menu</option>
        {categories.map((el) => (
          <option
            key={el}
            value={el}
            checked={category === el}>
            {el}
          </option>
        ))}
      </Form.Select>
      {todosLoading || getTodosLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      )}
    </Form>
  );
};

export default TodoForm;
