import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import { userTypes } from "../../utils/constants";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChangeID = (e) => {
    setUsername(e.target.value);
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      username,
      password,
    };

    if (!user.username) {
      alert("Enter username");
    } else if (!user.password) {
      alert("Enter Password");
    } else if (!user.username && !user.password) {
      alert("Enter Admin Credentials");
    } else {
      console.log(user);
      try {
        await axios
          .post("http://localhost:5000/api/users/login", {
            username,
            password,
          })
          .then((res) => {
            if (res.status === 200) {
              console.log(res.data);
              const userType = res.data.data.usertype;
              localStorage.setItem("token", res.data.data.token);
      
              if(userType === userTypes.APPROVER) {
                navigate("/viewApproverList");
              } else if(userType === userTypes.PURCHASER) {
                navigate("/approvedPurchaseList");
              } else if(userType === userTypes.RECEIVER) {
                navigate("/viewDeliveryList");
              } else if(userType === userTypes.REQUESTOR) {
                navigate("/viewPRList");
              }
            } else {
              alert("Login Failed! Please try again!");
            }
          });
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign in</h1>
            <p className="lead text-center">
              Sign-in to your ProcSupport account
            </p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter username"
                  name="username"
                  value={username}
                  onChange={onChangeID}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
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

export default Login;
