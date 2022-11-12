import React, { Component } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

/*const PR = (props) => {
  <tr>
    <td>{props.pr.prid}</td>
    <td>{props.pr.prName}</td>
    <td>{props.pr.description}</td>
    <td>{props.pr.amount}</td>
    <td>{props.pr.createdOn}</td>
    <td>{props.pr.updatedOn}</td>
    <td>{props.pr.status}</td>
  </tr>;
};*/

class PRListView extends Component {
  /*constructor(props){
    super(props);

    this.state = {
      prs:[],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:500/api/users/<link>')
    .then(response => {
      this.setState({
        prs: response.data
      })
    }).catch(function (error){
      console.log(error);
    })
  }

  prList(){
    return this.state.courses.map(function (currentPRs,i) {
        return <PR pr={currentPRs} key={i}/>
    });
}*/

  render() {
    return (
      <div className="viewPRList">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <h3 className="mb-2 float-left">Your Purchase Requests</h3>
              <br />
              <br />
              <div className="table-responsive-lg">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">PR ID</th>
                      <th scope="col">PR Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Created On</th>
                      <th scope="col">Updated On</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>This is a lengthy description</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>@fat</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <Link to="/addNewPR" className="btn btn-md btn-info float-right">
                <i className="fa-duotone fa-plus"></i> Add Purchase Request
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PRListView;
