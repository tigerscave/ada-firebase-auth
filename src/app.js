import React from 'react';
import logo from './logo.svg';
import './app.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="../vanilla-js-sample"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vanilla-js-sample
        </a>
      </header>
    </div>
  );
}

export default App;