import React, { Component } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

const list = [
  {
    id: 1,
    selected: false,
    prid: "PR-001",
    prName: "PipeOrder01",
    description: "Need 10 pipes",
    amount: "1000",
    createdOn: "11/10/2022",
    updatedOn: "11/10/2022",
    status: "Approved",
  },
  {
    id: 2,
    selected: false,
    prid: "PR-002",
    prName: "SandOrder01",
    description: "20kg sand",
    amount: "20000",
    createdOn: "11/10/2022",
    updatedOn: "11/10/2022",
    status: "Pending",
  },
  {
    id: 3,
    selected: false,
    prid: "PR-003",
    prName: "CementOrder01",
    description: "10kg sand",
    amount: "20000",
    createdOn: "11/09/2022",
    updatedOn: "11/09/2022",
    status: "Declined",
  },
  // {
  //   id: 4,
  //   selected: false,
  //   prid: "PR001",
  //   prName: "Ervin Howell",
  //   description: "Shanna@melissa.tv",
  //   amount: "010-692-6593 x09125",
  //   createdOn: "anastasia.net",
  //   updatedOn: "anastasia.net",
  //   status: "Pending",
  // },
];

/*const pr = (props) => {
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

class ApproverListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: list,
      MasterChecked: false,
      SelectedList: [],
    };
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((approver) => (approver.selected = e.target.checked));

    //Update State
    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Update List Item's state and Master Checkbox State
  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Event to get selected rows(Optional)
  getSelectedRows() {
    this.setState({
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

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
      <div className="viewApproverList">
        <div className="container">
          <div className="row">
            <div className="col-md-128 m-auto">
              <h3 className="mb-2 text-center">Available Budget</h3>
              <p className="text-center h1">50000.00 LKR</p>
              <br /> <br />
              <h3 className="mb-2 float-left">All Purchase Requests</h3>
              <br />
              <br />
              <div className="table-responsive-lg">
                <table className="table">
                <thead className="thead-dark">
                    <tr>
                      <th></th>
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
                    {this.state.List.map((approver) => (
                      <tr
                        key={approver.id}
                        className={approver.selected ? "selected" : ""}
                      >
                        <th scope="row">
                          <input
                            type="checkbox"
                            checked={approver.selected}
                            className="form-check-input"
                            id="rowcheck{user.id}"
                            onChange={(e) => this.onItemCheck(e, approver)}
                          />
                        </th>
                        <td>{approver.prid}</td>
                        <td>{approver.prName}</td>
                        <td>{approver.description}</td>
                        <td>{approver.amount}</td>
                        <td>{approver.createdOn}</td>
                        <td>{approver.updatedOn}</td>
                        <td>{approver.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* <button
                  className="btn btn-primary float-right"
                  onClick={() => this.getSelectedRows()}
                >
                  View Purchase Request details
                </button> */}
                <Link className="btn btn-success" to="/viewSelectedPRRecord">
                View Purchase Request details
              </Link>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ApproverListView;
