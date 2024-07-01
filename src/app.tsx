import React from "react";
import Router from "./routes/Router";

export default class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    );
  }
}
