import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/store';
import AppContainer from './src/containers';

function App(): JSX.Element {

  return (
    <StoreProvider store={store}>
      <AppContainer />
    </StoreProvider>
  );
}

export default App;
