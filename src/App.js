import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alumni from "./components/Alumni";
import Bio from "./components/Bio";

function App() {
  return (
    <Router>
        <NavBar />
        {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
        <Switch>
          <Route exact path="/alumni">
            <Alumni />
          </Route>
          <Route path="/bio">
            <Bio />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
