import React from "react";
import "./App.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


function App() {
  return (
    <section className="section">
    <div className="container">
      <h1 className="title">Press the Button</h1>
      <AwesomeButton type="primary">Button</AwesomeButton>
    </div>
  </section>
  );
}

export default App;
