import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

console.log('Parent React version', React.version);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
