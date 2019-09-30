import React from "react";
import "react-awesome-button/dist/styles.css";
import "./App.css";

function App() {
  const [date, setDate] = React.useState(new Date());

  //Replaces componentDidMount and componentWillUnmount
  React.useEffect(() => {
    var timerID = setInterval(() => tick(), 10);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.getSeconds()} {date.getMilliseconds()}.</h2>
    </div>
  );
}

export default App;
