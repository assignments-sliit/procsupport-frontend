import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ApprovedPurchase = (props) => (
  <tr>
    <td>{props.ApprovedPurchaseList.poid}</td>
    <td>{props.ApprovedPurchaseList.supplier}</td>
    <td>{props.ApprovedPurchaseList.amount}</td>
    <td>{props.ApprovedPurchaseList.createdon}</td>
    <td>{props.ApprovedPurchaseList.description}</td>
    <td>{props.ApprovedPurchaseList.prid}</td>
  </tr>
);

const Budget = (props) => (
  <tr>
    <td>{props.ApprovedPurchaseList.budget}</td>
  </tr>
);

class ApprovedPurchaseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      approvedPurchase: [],
      budget: [],
    };
  }

  getApprovedPurchase() {
    axios
      .get("http://localhost:5000/api/po/get/approved")
      .then((response) => {
        this.setState({
          ApprovedPurchase: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getBudget() {
    axios
      .get("http://localhost:5000/api/budget/get/pr")
      .then((response) => {
        this.setState({
          Budget: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.ApprovedPurchaseList();
    this.ViewBudget();

    // axios.get("http://localhost:5000/api/po/get/approved").then((response) => {
    //   this.setState({
    //     ApprovedPurchase: response.data,
    //   });
    // })
    // axios
    //   .get("http://localhost:5000/api/budget/get/pr")
    //   .then((response) => {
    //     this.setState({
    //       Budget: response.data,
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  ApprovedPurchaseList() {
    return this.state.approvedPurchase.map(function (
      currentApprovedPurchase,
      i
    ) {
      return (
        <ApprovedPurchase approvedPurchase={currentApprovedPurchase} key={i} />
      );
    });
  }

  ViewBudget() {
    return this.state.budget.map(function (currentBudget, i) {
      return <Budget budget={currentBudget} key={i} />;
    });
  }

  // navigate = useNavigate();
  // navigateToCreatePurchaseOrder(){
  //   this.navigate('/CreatePurchaseOrder');
  // };

  onSubmit() {
    const { navigate } = this.props;
    // Navigate to Another Component
    navigate("/CreatePurchaseOrder");
  }

  render() {
    return (
      <div className="approvedPurchaseList">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">Approved Purchase Request List</h1>
              <hr />
              <h3>Budget: LKR 200000 </h3>
              <h3>{this.ViewBudget}</h3>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6 col-md-2">
              <Link className="btn btn-success" to="/createPurchaseOrder">
                Create Purchse Order
              </Link>
            </div>
          </div>
          <hr />
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">PR ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Created On</th>
                <th scope="col">Updated On</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                  </div>
                </th>
                <td>PR-001</td>
                <td>PipeOrder01</td>
                <td>Need 10 pipes</td>
                <td>1000</td>
                <td>11/10/2022</td>
                <td>11/10/2022</td>
                <td>Approved</td>
              </tr>
              {/* {this.ApprovedPurchaseList()} */}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ApprovedPurchaseList;
