import { Component } from 'react';

import { TodoForm } from './components/TodoForm';
import FilterTodos from 'components/FilterTodos';
import TodosList from 'components/TodosList';

class App extends Component {
  state = { todos: [], value: '' };

  onSubmitTodoForm = ({ todo, reset }) => {
    const isDuplicate = this.state.todos.find(
      (el) =>
        el.title.toLowerCase() === todo.title.toLowerCase()
    );
    if (isDuplicate) {
      alert(
        `Task with title - ${isDuplicate.title} already exist`
      );
      return;
    }
    this.setState((prev) => ({
      todos: [...prev.todos, todo],
    }));
    reset();
  };

  onChange = (e) =>
    this.setState({ value: e.currentTarget.value });

  render() {
    const { onSubmitTodoForm, onChange } = this;
    const { todos, value } = this.state;
    const filteredTodos = value
      ? todos.filter((el) =>
          el.title
            .toLowerCase()
            .includes(value.toLowerCase())
        )
      : todos;
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 auto',
          width: '80vw',
          gap: '40px',
        }}>
        <TodoForm onSubmitTodoForm={onSubmitTodoForm} />
        <FilterTodos onChange={onChange} value={value} />
        <TodosList
          filteredTodos={filteredTodos}
          todos={todos}
        />
      </div>
    );
  }
}

export default App;
