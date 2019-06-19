import React from "react";
import LogoProfilePanel from "../login/right-side/logo-profile-panel";

const DashboardProfile = () => (
  <div className="container">
    <LogoProfilePanel />
    <table>
      <tr>
        <th>Tweets</th>
        <th>Following</th>
        <th>Followers</th>
      </tr>
      <tr>
        <td>92</td>
        <td>80</td>
        <td>75</td>
      </tr>
    </table>
    <style jsx>{`
      .container {
        width: 25%;
        height: 200px;
      }
    `}</style>
  </div>
);

export default DashboardProfile;
