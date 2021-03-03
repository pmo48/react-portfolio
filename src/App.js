import React from "react";
import './App.css';
import Nav from "./components/nav.js"
import Footer from "./components/footer.js"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./pages/About.js";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Nav />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
