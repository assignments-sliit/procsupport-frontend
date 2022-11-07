import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">ProcSupport</h1>
                <p className="lead">
                  {" "}
                  Managing your Orders easily within a second!
                </p>
                <hr />
                <a href="login.html" className="btn btn-lg btn-info">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
