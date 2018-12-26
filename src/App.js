import React, { Component } from 'react';
import './App.css';

import Display from './containers/display'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Display />
        </header>
      </div>
    );
  }
}

export default App;
