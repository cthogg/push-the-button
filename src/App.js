import React from "react";
import "react-awesome-button/dist/styles.css";
import "./App.css";

function App() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());


  return (
    <div>
      <h1>Hello, world!</h1>
      <button onClick={()=> setStartDate(new Date())}> SET DATE </button>
      <button onClick={()=> setEndDate(new Date())} > END DATE </button>

      <h2>It is {startDate.getSeconds()} {startDate.getMilliseconds()}.</h2>

      <h2>It is {endDate.getSeconds()} {endDate.getMilliseconds()}.</h2>

    </div>
  );
}

export default App;
