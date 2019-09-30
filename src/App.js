import React from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useStopwatch } from 'react-timer-hook';


function App() {

  const {
    seconds,
    minutes,
    hours,
    days,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });
  return (
    <section className="section">
    <div className="container">
      <h1 className="title">Press the Button</h1>
      <AwesomeButton onMouseDown={start} onMouseUp={pause} type="primary">Button</AwesomeButton>
    </div>

    <div className="container">
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook</h1>
      <p>Stopwatch Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
      <button onMouseDown={start} onMouseUp={pause}>Start</button>

    </div>
    </div>
  </section>
  );
}

export default App;
