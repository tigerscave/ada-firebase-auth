import React from "react";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const IndexPage = () => (
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
    <style jsx>{`
      .App {
        text-align: center;
      }

      .App-logo {
        animation: App-logo-spin infinite 20s linear;
        height: 40vmin;
        pointer-events: none;
      }

      .App-header {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
      }

      .App-link {
        color: #61dafb;
      }

      @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default IndexPage;
