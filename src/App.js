import React, { useState } from 'react';
import './App.css';
import add from './utile/add';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      setError('');
      const sum = add(input);
      setResult(sum);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div align="center">
    <h2>String Calculator</h2>
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Enter numbers"
    />
    <button onClick={handleCalculate}>Calculate</button>
    {result !== null && <p>Result: {result}</p>}
    {error && <p style={{ color: 'red' }}>{error}</p>}
  </div>
  );
}

export default App;
