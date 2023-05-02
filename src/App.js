import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState();
  // const [hue, setHue] = useState('random');
  // const [luminosity, setLuminosity] = useState('random');

  return (
    <div className="App">
      <div style={{ border: '2px solid black', backgroundColor: color }}>
        <p>Generated Color: {color}</p>
        <button onClick={() => setColor(randomColor())}>Generate</button>
        <label>
          Set hue:
          <input
            onChange={(event) =>
              setColor(
                randomColor({
                  luminosity: 'bright',
                  hue: event.currentTarget.value,
                }),
              )
            }
          />
        </label>
        <label>
          Set luminosity:
          <input />
        </label>
      </div>
    </div>
  );
}
