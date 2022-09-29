import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { error: false };
  componentDidCatch(error) {
    this.setState({ error: true });
  }
  render() {
    const { error } = this.state;
    const { children } = this.props;
    //     console.log('children :>> ', children);
    return (
      <>{!error ? children : <h1>You have error</h1>}</>
    );
  }
}

export default ErrorBoundary;
