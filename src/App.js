import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState();
  return (
    <div className="App">
      <div style={{ border: '2px solid black', backgroundColor: color }}>
        <p>Generated Color: {color}</p>
        <button onClick={() => setColor(randomColor())}>Generate</button>
      </div>
    </div>
  );
}
