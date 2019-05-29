import React from "react";
import { Router, Route } from "react-router-dom";
import { history } from "./redux";
import IndexPage from "./pages";
import WelcomePage from "./pages/welcome";
import SignUpPage from "./pages/sign-up";
import LoginPage from "./pages/login";
import TopPage from "./pages/top";
import MyAccountPage from "./pages/my-account";
import TwitterTop from "./pages/twitter";
import PostTweetPage from "./pages/twitter/post-tweet";
import MyTweetPage from "./pages/twitter/my-tweet";

function App() {
  return (
    <Router history={history}>
      <Route path="/" exact component={IndexPage} />
      <Route path="/welcome" component={WelcomePage} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/top" component={TopPage} />
      <Route path="/my-account" component={MyAccountPage} />
      <Route path="/twitter" component={TwitterTop} />
      <Route path="/post-tweet" component={PostTweetPage} />
      <Route path="/my-tweet" component={MyTweetPage} />
    </Router>
  );
}

export default App;
