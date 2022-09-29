import { Component } from 'react';

import Application from 'components/Application/Application';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import SelectContextProvider from 'components/SelectContext/SelectContext';

class App extends Component {
  render() {
    return (
      <SelectContextProvider>
        <ErrorBoundary>
          <Application />
        </ErrorBoundary>
      </SelectContextProvider>
    );
  }
}

export default App;
