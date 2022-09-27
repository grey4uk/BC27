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

  handleDeleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(
        (element) => element.id !== id
      ),
    }));
  };

  toggleIsDone = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((element) =>
        element.id === id
          ? { ...element, isDone: !element.isDone }
          : element
      ),
    }));
  };

  countDoneTodos = () => {
    return this.state.todos.filter((el) => el.isDone)
      .length;
  };

  render() {
    const { todos } = this.state;
    const {
      handleAddTodo,
      handleDeleteTodo,
      toggleIsDone,
      countDoneTodos,
    } = this;
    return (
      <>
        <TodosForm handleAddTodo={handleAddTodo} />
        <h2>
          {countDoneTodos()}/{todos.length}
        </h2>
        <TodosList
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          toggleIsDone={toggleIsDone}
        />
      </>
    );
  }
}

export default TodosPage;
