import React from "react";
import logo from "./logo.svg";
import "./app.css";
import { Router, Route, Link } from "react-router-dom";
import { history } from "./redux";
import WelcomePage from "./pages/welcome";
import SignUpPage from "./pages/sign-up";
import LoginPage from "./pages/login";
import TopPage from "./pages/top";
import MyAccountPage from "./pages/my-account";
import TwitterTop from "./pages/twitter";
import PostTweetPage from "./pages/twitter/post-tweet";
import MyTweetPage from "./pages/twitter/my-tweet";
import EditUserDetail from "./pages/edit-user-detail";
import SearchUser from "./pages/twitter/search-user";

import AnonymatterLogin from "./pages/anonymatter/login";

const Hello = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Firebase sample using React-Redux / Vanilla JS</p>
      <Link className="App-link" to="/welcome">
        <p>React-Redux Sample</p>
      </Link>
      <Link className="App-link" to="/anonymatter/login">
        <p>Anonymatter</p>
      </Link>
      <p>
        <a
          className="App-link"
          href="../vanilla-js-sample"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vanilla JS Sample
        </a>
      </p>
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
      <Route path="/edit-user-detail" component={EditUserDetail} />
      <Route path="/top" component={TopPage} />
      <Route path="/my-account" component={MyAccountPage} />
      <Route path="/twitter" component={TwitterTop} />
      <Route path="/post-tweet" component={PostTweetPage} />
      <Route path="/my-tweet" component={MyTweetPage} />
      <Route path="/search-user" component={SearchUser} />
      <Route path="/anonymatter/login" component={AnonymatterLogin} />
    </Router>
  );
}

export default App;
