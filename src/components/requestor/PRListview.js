import React, { Component } from "react";
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
            <div className="col-md-8 m-auto">
              <h2 className="display-4 text-center">Your Purchase Requests</h2>

              <div class="table-responsive">
                <table class="table">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PRListView;
