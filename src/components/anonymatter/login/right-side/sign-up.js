import React from "react";
// import PropTypes from "prop-types";

const SignUp = () => {
  return (
    <div>
      <div>
        <button>Sign Up</button>
        <button>
          <i className="fab fa-twitter" />
          <span>Twitter Login</span>
        </button>
      </div>
      <style jsx>{`
        div {
          //  flex: 1;
          //  background: yellow;
        }
      `}</style>
    </div>
  );
};

export default SignUp;
