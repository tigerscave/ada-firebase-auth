import React from "react";
import Users from "./users";

const DashboardProfile = () => (
  <div className="container">
    <div>
      <i className="fas fa-user-circle" />
      <p>@no_name</p>
    </div>
    <table>
      <thead>
        <tr>
          <th>Tweets</th>
          <th>Following</th>
          <th>Followers</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>92</td>
          <td>80</td>
          <td>75</td>
        </tr>
      </tbody>
    </table>
    <Users />
    <style jsx>{`
      .container {
        width: 25%;
        height: 200px;
      }
    `}</style>
  </div>
);

export default DashboardProfile;
