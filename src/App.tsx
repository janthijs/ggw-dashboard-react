import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Dashboard from "./components/layout/Dashboard";
import GGWFooter from "./components/layout/GGWFooter";
import GGWHeader from "./components/layout/GGWHeader";

function App() {
  return (
    <>
      <GGWHeader />
      <Router>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
      <GGWFooter />
    </>
  );
}

export default App;
