import React, { Component } from 'react';
import TodosForm from 'components/TodosForm';
import TodosList from 'components/TodosList';

class TodosPage extends Component {
  state = { todos: [] };
  // todo=  {title:'',desc:''}

  handleAddTodo = (todo) =>
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));

  render() {
    const { todos } = this.state;
    const { handleAddTodo } = this;
    return (
      <>
        <TodosForm handleAddTodo={handleAddTodo} />
        <TodosList todos={todos} />
      </>
    );
  }
}

export default TodosPage;
