import React from "react";
import './App.css';
import Nav from "./components/nav.js"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About.js";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
