import React from "react";
import { Link } from "react-router-dom";

const TopPage = () => (
  <div>
    <h1>Top Page</h1>
    <Link to="/my-account">
      <p>My Account</p>
    </Link>
    <Link to="/twitter">
      <p>Twitter</p>
    </Link>
    <h3>Login success !!!</h3>
  </div>
);

export default TopPage;
