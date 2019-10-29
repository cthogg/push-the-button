import React from "react";
import "./index.scss";
import moment from "moment";
import Loader from "react-loader-spinner";

const START_STRING = "START";
const STOP_STRING = "STOP!";

function App() {
  let now = moment().format("LLLL");

  const [startDate, setStartDate] = React.useState(moment());
  const [endDate, setEndDate] = React.useState(moment());
  const [started, setStarted] = React.useState(true);
  const [buttonText, setButtonText] = React.useState(START_STRING);
  const [challengeTime, setChallengeTime] = React.useState(1000);
  const [buttonCLickedAtLeastOnce, setButtonClickedAtLeastONce] = React.useState(false)
  const onClick = (started: boolean) => {
    setButtonClickedAtLeastONce(true)
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
  const colorOfDivFunc = (
    isDifferenceLargerThanTime: boolean,
    isResponseNegative: boolean
  ) => {
    if (isResponseNegative) {
      return "is-hidden";
    }

    if (isDifferenceLargerThanTime) {
      return "has-text-danger";
    }
    return "has-text-success";
  };
  const responseTime = endDate.diff(startDate);
  const differenceOut = Math.abs(challengeTime - responseTime);
  const GRACE_TIME = 200;
  const isDifferenceLargerThanTime = differenceOut < GRACE_TIME ? true : false;
  const isResponseNegative = responseTime <= 0;
  const colorOfDiv = colorOfDivFunc(
    isDifferenceLargerThanTime,
    isResponseNegative
  );
  const isLoaderShown =  (
    isResponseNegative: boolean,
    buttonCLickedAtLeastOnce: boolean
  ) => {
    if (isResponseNegative && buttonCLickedAtLeastOnce) {
      return "is-primary"
    }
    else{
      return "is-hidden"
    }
  };
  const loaderClass = isLoaderShown(isResponseNegative, buttonCLickedAtLeastOnce)
  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <h1 className="title">
            Click the Button for {challengeTime / 1000} second
          </h1>
          <a
            className="button is-primary is-large"
            onClick={() => onClick(started)}
          >
            {" "}
            {buttonText}{" "}
          </a>
        </div>
        <div style={{ marginTop: 15 }} className="container">
          <h2 className={colorOfDiv}>
            {" "}
            You held it for{" "}
            {moment.duration(responseTime, "ms").asMilliseconds()} ms{" "}
          </h2>
          <h2 className={colorOfDiv}> Off by {differenceOut} ms </h2>
          <Loader type={'Hearts'} color={'hsl(141, 53%, 53%)'} className={loaderClass} > </Loader>
        </div>
      </section>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 20,
          width: "100%",
          height: "2.5rem"
        }}
      >
        <div className=" has-text-right">
          <p>
            <a href="https://github.com/cthogg/push-the-button">Source Code</a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
