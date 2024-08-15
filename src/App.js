import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Hello, World!');

  const handleClick = () => {
    setMessage('You clicked the button!');
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
