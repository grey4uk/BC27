import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_STATE = { title: '', desc: '' };

export default class TodosForm extends Component {
  state = INITIAL_STATE;
  // {title:'',desc:''}

  //   constructor(props) {
  //     super(props);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //     this.props = props;
  //   }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddTodo({ ...this.state, id: uuid() });
    //     this.setState(INITIAL_STATE)

    this.reset();
  };

  handleInputValue = (event) => {
    //     console.log('event', event.target.name);
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  reset = () => this.setState(INITIAL_STATE);

  render() {
    const { title, desc } = this.state;
    const { handleSubmit, handleInputValue } = this;
    //     console.log(
    //       'Object.keys(this.state) :>> ',
    //       Object.keys(this.state)
    //     );
    //     const keys = Object.keys(this.state);
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            name='title'
            value={title}
            onChange={handleInputValue}
          />
        </label>
        <label htmlFor='desc'>Description</label>
        <input
          id='desc'
          name='desc'
          value={desc}
          onChange={handleInputValue}
        />
        <button type='submit'>ADD TODO</button>

        {/* {keys.map((key) => (
          <label
            key={key}
            style={{ textTransform: 'uppercase' }}>
            {key}
            <input
              type='text'
              name={key}
              value={this.state[key]}
              onChange={handleInputValue}
            />
          </label>
        ))} */}
      </form>
    );
  }
}
