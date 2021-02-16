import ReactComponent from "./components/react-component";
import "./App.css";
import FunctionalComponent from "./components/functional-component";
import ReactPureComponent from "./components/react-pure-component";
import ReactDom from "react-dom";
import React from "react";

function App() {
  const element = React.createElement(
    "h1",
    null,
    "Hello from React.CreateElement"
  );

  ReactDom.render(element, document.getElementById("element"));

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <ReactComponent></ReactComponent>
      <ReactPureComponent></ReactPureComponent>
      <FunctionalComponent></FunctionalComponent>
    </div>
  );
}

export default App;
