import React from 'react';
import ReactDOM from 'react-dom/client';
import { pyramid } from '../mario';
import './App.css';  // Import your CSS file

function App() {
  return (
    <div>
      <h1>Welcome to my page</h1>
      <div className="container">
        <ul>
          <li>
            <p>First row</p>
            <p id='pyra'>{pyramid}</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Second row</p>
          </li>
        </ul>
        <ul>
          <li>
            <p>Third row</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
