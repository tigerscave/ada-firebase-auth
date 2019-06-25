import React from "react";
import { accent } from "../../../../styles/color";

const SignUp = () => {
  return (
    <div className="container">
        <button className="signup">Sign Up</button>
        <button className="twitter">
          <i className="fab fa-twitter" />
          <span className="login">Twitter Login</span>
        </button>
      <style jsx>{`
        .container {
           display: flex;
          //  background: yellow;
        }
        .signup {
          color: white;
          height: 50px;
          background-color: ${accent};
          border-radius: 5px;
          font-weight: bold;
          font-size: 16px;
          width: 35%;
          margin: 0 50px 0 0;
        }
        .twitter {
          color: ${accent};
          border-color: ${accent};
          border-width: 2px;
          border-radius: 5px;
          height: 50px;
          width: 35%;
          align-items: center;
          display: flex;
          justify-content: center;
        }
        i {
          font-size: 34px;
          color: ${accent};
          margin: 0 10px 0 0;
        }
        span.login {
          font-size: 16px;
          font-weight: bold;
          display: inline-block;
          vertical-align: middle;
        }
      `}</style>
    </div>
  );
};

export default SignUp;
