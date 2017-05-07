import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './Store';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="app">
        </div>
      </Provider>
    );
  }
}

export default App;
