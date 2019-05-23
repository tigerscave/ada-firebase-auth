import React from "react";
import firebase from "firebase/app";

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.onEmailChanged = e => {
      this.setState({
        email: e.target.value
      });
    };

    this.onPasswordChanged = e => {
      this.setState({
        password: e.target.value
      });
    };

    this.onSignUpUser = (email, password) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          alert("User sign up successfully");
        })
        .catch(() => {
          alert("User Sign Up Failed");
        });
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>
        <input
          placeholder="email"
          onChange={this.onEmailChanged}
          value={email}
        />
        <input
          placeholder="password"
          onChange={this.onPasswordChanged}
          value={password}
        />

        <button onClick={() => this.onSignUpUser(email, password)}>
          Sign up
        </button>
      </div>
    );
  }
}

export default SignUpPage;
