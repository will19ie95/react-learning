import React from "react";

// function Tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }
// setInterval(Tick, 1000);

class Tick extends React.Component {
  constructor(props) {
    super();
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleDateString()}.</h2>{" "}
      </div>
    );
  }
}

export default Tick;
