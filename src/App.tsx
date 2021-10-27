import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import GGWFooter from "./components/layout/GGWFooter";
import GGWHeader from "./components/layout/GGWHeader";
import GebiedInHetKort from "./themas/GebiedInHetKort";

function App() {
  return (
    <>
      <GGWHeader />
      <Router>
        <Switch>
          <Route path="/">
            <GebiedInHetKort />
          </Route>
        </Switch>
      </Router>
      <GGWFooter />
    </>
  );
}

export default App;
