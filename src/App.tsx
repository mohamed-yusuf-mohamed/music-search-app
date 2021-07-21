import React from 'react';
import logo from './next-logo.png';
import { Counter } from './features/counter/Counter';
import SearchBar from "./features/SearchBar"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Next Assessment
        </p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <SearchBar />
        {/* <Counter /> */}
      </header>
    </div>
  );
}

export default App;
