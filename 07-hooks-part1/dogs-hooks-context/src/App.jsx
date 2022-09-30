import { Component } from 'react';

import Application from 'components/Application/Application';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import SelectContextProvider from 'components/SelectContext/SelectContext';

class App extends Component {
  render() {
    return (
      <SelectContextProvider>
        {/* <ImagesContextProvider> */}
        <ErrorBoundary>
          <Application />
        </ErrorBoundary>
        {/* </ImagesContextProvider> */}
      </SelectContextProvider>
    );
  }
}

export default App;
