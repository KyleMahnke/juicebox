import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Nav from "./Nav";

const App = () => {
  return (
    <main id="main" className="App">
      <Router>
        <Nav />
        <Switch></Switch>
      </Router>
    </main>
  );
};

export default App;
