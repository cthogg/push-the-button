import React from "react";
import "react-awesome-button/dist/styles.css";
import "./App.css";
import moment from "moment";

function msToTime(duration: number) {
  const milliseconds = (duration % 1000) / 100;
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  const newHours = hours < 10 ? "0" + hours : hours;
  const newMinutes = minutes < 10 ? "0" + minutes : minutes;
  const newSeconds = seconds < 10 ? "0" + seconds : seconds;

  return newHours + ":" + newMinutes + ":" + newSeconds + "." + milliseconds;
}

const START_STRING = 'START'
const STOP_STRING ='STOP!'

function App() {
  console.log(moment.locale());
  let now = moment().format("LLLL");

  const [startDate, setStartDate] = React.useState(moment());
  const [endDate, setEndDate] = React.useState(moment());
  const [started, setStarted] = React.useState(true);
  const [buttonText, setButtonText] =  React.useState(START_STRING);
  const onClick = (started: boolean) => {
    if (started) {
      setStartDate(moment());
      setStarted(!started);
      setButtonText(STOP_STRING)
    }
    if (!started) {
      setEndDate(moment());
      setStarted(!started);
      setButtonText(START_STRING)

    }
  };
  const difference = endDate.diff(startDate);
  const diffInSeconds = moment.utc(difference).format("ss:ms");

  return (
    <div>
      <h1>Click the Button</h1>
      <button onClick={() => setStartDate(moment())}> SET DATE </button>
      <button onClick={() => setEndDate(moment())}> END DATE </button>
      <button onClick={() => onClick(started)}> {buttonText} </button>

      <h2>It is {startDate.valueOf()} </h2>

      <h2>It is {endDate.valueOf()} </h2>
      <h2> Difference is {endDate.diff(startDate)} </h2>
    </div>
  );
}

export default App;
