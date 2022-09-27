import { Component } from 'react';

import Application from 'components/Application/Application';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Application />
      </ErrorBoundary>
    );
  }
}

export default App;
