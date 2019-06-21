import React from "react";
import { accent } from "../../../../styles/color";

const SignUp = () => {
  return (
    <div>
      <div>
        <button className="signup">Sign Up</button>
        <button className="twitter">
          <i className="fab fa-twitter" />
          <span className="login">Twitter Login</span>
        </button>
      </div>
      <style jsx>{`
        div {
          //  flex: 1;
          //  background: yellow;
        }
        button.signup {
          color: white;
          padding-top: 20px;
          padding-bottom: 18px;
          padding-right: 120px;
          padding-left: 120px;
          margin-top: 40px;
          margin-left: 120px;
          background-color: ${accent};
          border-radius: 5px;
          margin-bottom: 100px;
          font-weight: bold;
          font-size: 1em;
        }
        button.twitter {
          color: ${accent};
          padding-top: 4px;
          padding-bottom: 4px;
          padding-right: 100px;
          padding-left: 40px;
          margin-left: 40px;
          margin-right: 15px;
          border-color: ${accent};
          border-width: 2px;
          border-radius: 5px;
          font-weight: bold;
          height: 5.2em;
        }
        i {
          font-size: 2.4em;
          margin-right: 20px;
          margin-bottom: 3px;
          color: ${accent};
          margin-top: 2px;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        span.login {
          font-size: 1.4em;
          display: inline-block;
          vertical-align: middle;
          height: 2em;
        }
      `}</style>
    </div>
  );
};

export default SignUp;
