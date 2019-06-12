import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
// import Tick from "./tick";
import FlavorForm from "./flavorForm";
import Calculator from "./temperatureCalc";
import SignUpDialog from "./dialog";

function Welcome(props) {
  return (
    <h1>
      Hello, {props.name}, {new Date().toLocaleTimeString()}
    </h1>
  );
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

function Seperator(props) {
  return (
    <div className="seperator">
      <br />
      <br />
      <hr color="blue" />
      <br />
      <br />
    </div>
  );
}

function App() {
  return (
    <div>
      <Clock />
      <Seperator />
      <FlavorForm />
      <Seperator />
      <Calculator />
      <Seperator />
      <SignUpDialog />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
