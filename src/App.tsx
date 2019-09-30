import React from "react";
import "./index.scss";
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

const START_STRING = "START";
const STOP_STRING = "STOP!";

function App() {
  console.log(moment.locale());
  let now = moment().format("LLLL");

  const [startDate, setStartDate] = React.useState(moment());
  const [endDate, setEndDate] = React.useState(moment());
  const [started, setStarted] = React.useState(true);
  const [buttonText, setButtonText] = React.useState(START_STRING);
  const [challengeTime, setChallengeTime] = React.useState(1000);

  const onClick = (started: boolean) => {
    if (started) {
      setStartDate(moment());
      setStarted(!started);
      setButtonText(STOP_STRING);
    }
    if (!started) {
      setEndDate(moment());
      setStarted(!started);
      setButtonText(START_STRING);
    }
  };
  
  const responseTime = endDate.diff(startDate);
  const differenceOut = Math.abs(challengeTime - responseTime) 
  const isDifferenceLargerThanTime = differenceOut < 200? true : false
  const colorOfDiv = isDifferenceLargerThanTime ? 'has-text-success' : 'has-text-danger'
  return (
    <React.Fragment> 
    <section className="section">
      <div className="container">
        <h1 className="title">Click the Button for {challengeTime/1000} seconds</h1>
        <a className="button is-primary is-large" onClick={() => onClick(started)}> {buttonText} </a>
        </div>
        </section>

        <div className="container">
        <h2 className={colorOfDiv} > You held it for {responseTime} ms </h2>
        <h2 className={colorOfDiv}> Off by {differenceOut} ms </h2>

      </div>
</React.Fragment>
  );
}

export default App;
