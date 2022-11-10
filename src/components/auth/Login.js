import React, { Component } from "react";
import axios from "axios";
//import jwt from "jsonwebtoken";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      //errors: {},
    };

    //this.onChange = this.onChange.bind(this);
    this.onChangeID = this.onChangeID.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeID(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    if (!user.username) {
      alert("Enter username");
    } else if (!user.password) {
      alert("Enter Password");
    } else if (!user.username && !user.password) {
      alert("Enter Admin Credentials");
    } else {
      axios.get("http://localhost:5000/api/users/login", user).then((res) => {
        if (res.status === 200) {
          console.log(res.token);
          alert("Login Success! Welcome, " + this.state.username);
          this.props.history.push("/"); //after login
        } else {
          alert("Login Failed! Please try again!");
        }
      });
    }
  }

  render() {
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign in</h1>
              <p className="lead text-center">
                Sign-in to your ProcSupport account
              </p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter username"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeID}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-success btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
