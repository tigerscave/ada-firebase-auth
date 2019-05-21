import React from "react";
import logo from "./logo.svg";
import "./app.css";
import { Router, Route, Link } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import SignUpPage from "./pages/sign-up";
import LoginPage from "./pages/login";
import TopPage from "./pages/top";
import { history } from "./redux";

const Hello = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Firebase sample using React-Redux / Vanilla JS</p>
      <Link className="App-link" to="/welcome">
        <p>React-Redux Sample</p>
      </Link>
      <a
        className="App-link"
        href="../vanilla-js-sample"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vanilla JS Sample
      </a>
    </header>
  </div>
);

function App() {
  return (
    <Router history={history}>
      <Route path="/" exact component={Hello} />
      <Route path="/welcome" component={WelcomePage} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/top" component={TopPage} />
    </Router>
  );
}

export default App;
