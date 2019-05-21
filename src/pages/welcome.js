import React from 'react';
import { Link } from "react-router-dom";

const WelcomePage = () => (
  <div>
    <h1>Firebase authentication sample</h1>
    <Link to="/sign-up">
      <p>Sign up</p>
    </Link>
    <Link to="/login">
      <p>Login</p>
    </Link>
  </div>
);

export default WelcomePage;