import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState();

  function handleChange(event) {
    const [hue, luminosity] = event.currentTarget.value.split(' ');

    if (luminosity) {
      setColor(
        randomColor({
          luminosity: luminosity,
          hue: hue,
        }),
      );
    } else {
      setColor(
        randomColor({
          luminosity: 'bright',
          hue: hue,
        }),
      );
    }
  }

  return (
    <div className="App">
      <div style={{ border: '2px solid black', backgroundColor: color }}>
        Generated Color: {color}
        <button onClick={() => setColor(randomColor())}>Generate</button>
      </div>
      <label>
        Set only hue or hue and luminosity:
        <input onChange={handleChange} />
      </label>
    </div>
  );
}
