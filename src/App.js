import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Alumni from "./components/Alumni";
import Bio from "./components/Bio";
import Phd from "./components/Phd";
import Teaching from "./components/Teaching";
import Home from "./components/Home";
import Undergrad from "./components/Undergrad";
import Publications from "./components/Publications";
import Talks from "./components/Talks";
import ProfEngagements from "./components/ProfEngagements";

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
        <Route path="/home">
            <Home />
          </Route>
        <Route path="/teaching">
            <Teaching />
          </Route>
          <Route exact path="/alumni">
            <Alumni />
          </Route>
          <Route path="/phd">
            <Phd />
          </Route>
          <Route path="/undergrad">
            <Undergrad />
          </Route>
          <Route path="/profEngagements">
            <ProfEngagements/>
          </Route>
          <Route path="/publications">
            <Publications />
          </Route>
          <Route path="/talks">
            <Talks />
          </Route>
          <Route path="/bio">
            <Bio />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
