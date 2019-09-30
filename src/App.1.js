import React from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useStopwatch } from 'react-timer-hook';
import Timer from 'react-compound-timer'

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
  var startTime = Date.now();
  var interval = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
}, 100);
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
      <span id="timer"></span> s

    </div>
    </div>

    <div className="container">
    <Timer
    initialTime={55000}
    startImmediately={false}
    onStart={() => console.log('onStart hook')}
    onResume={() => console.log('onResume hook')}
    onPause={() => console.log('onPause hook')}
    onStop={() => console.log('onStop hook')}
    onReset={() => console.log('onReset hook')}
>
    {({ start, resume, pause, stop, reset, timerState }) => (
        <React.Fragment>
            <div>
                <Timer.Days /> days
                <Timer.Hours /> hours
                <Timer.Minutes /> minutes
                <Timer.Seconds /> seconds
                <Timer.Milliseconds /> milliseconds
            </div>
            <br />
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </React.Fragment>
    )}
</Timer>

    </div>


  </section>
  );
}

export default App;
