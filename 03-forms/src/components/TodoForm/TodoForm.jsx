import { Component } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';

const categories = ['home', 'buy', 'study'];

const INITIAL_STATE = {
  title: '',
  desc: '',
  agree: false,
  priority: 'Low',
  category: categories[0],
};

class TodoForm extends Component {
  state = INITIAL_STATE;

  titleId = uuid();
  desc = uuid();

  onChangeInput = (e) => {
    //   onChangeInput = ({target:{value,name}}) => {
    const { target } = e;
    const {
      value,
      name,
      //  checked
    } = target;
    console.log('name', name);
    console.log('value', value);
    //     console.log('checked :>> ', checked);
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState(INITIAL_STATE);
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    //     const elements = e.target.elements;

    //     [...elements].forEach((el) => console.log(el.value));

    //     const newTodo = {
    //       title: this.validateTitle(elements[0].value)
    //         ? elements[0].value
    //         : 'No title',
    //       desc: elements[1].value,
    //     };

    //     this.setState(newTodo);
    const { reset } = this;
    const todo = {
      ...this.state,
      id: uuid(),
    };
    this.props.onSubmitTodoForm({
      //       todo: todo,
      //       reset: reset,
      todo,
      reset,
    });
  };

  validateTitle = (string) => (string ? true : false);

  render() {
    const { onSubmitForm, onChangeInput, titleId, descId } =
      this;
    const { title, desc, agree, priority, category } =
      this.state;
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
          <Form.Label style={{}}>
            Task description
          </Form.Label>
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
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    );
  }
}

export default TodoForm;
