import React from "react";
import { Link } from "react-router-dom";
import SearchUser2 from "./search-user2";

const TwitterTop = () => (
  <div>
    <h1>Twitter</h1>
    <div className="links">
      <Link to="/post-tweet">
        <p>Post Tweet</p>
      </Link>
      <Link to="/my-tweet">
        <p>My tweet</p>
      </Link>
      <Link to="/search-user">
        <p>Search User</p>
      </Link>
      <Link to="/follower">
        <p>Follower</p>
      </Link>
      <Link to="/followee">
        <p>Followee</p>
      </Link>
      <Link to="/feed">
        <p>Feed</p>
      </Link>
      <Link to="/favorite">
        <p>Favorite tweet</p>
      </Link>
      <SearchUser2 />
    </div>
    <style jsx>{`
      div.links {
        padding-left: 2rem;
      }
    `}</style>
  </div>
);

export default TwitterTop;
