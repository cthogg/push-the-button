import React from "react";
import "react-awesome-button/dist/styles.css";
import "./App.css";
import  moment from 'moment';

function App() {
  console.log(moment.locale());
  let now = moment().format('LLLL');
  
  const [startDate, setStartDate] = React.useState(moment());
  const [endDate, setEndDate] = React.useState(moment());


  return (
    <div>
      <h1>Click the Button</h1>
      <button onClick={()=> setStartDate(moment())}> SET DATE </button>
      <button onClick={()=> setEndDate(moment())} > END DATE </button>

      <h2>It is {startDate.valueOf()} </h2>

      <h2>It is {endDate.valueOf()} </h2>
      <h2> Difference is  {endDate.diff(startDate)} </h2>

    </div>
  );
}

export default App;
