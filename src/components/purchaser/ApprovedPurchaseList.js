import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
  }]

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
      MasterChecked: false,
      SelectedList: [],
      List: list,
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
                <th></th>
                {/* <th scope="col">#</th> */}
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
              {/* <tr>
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
              </tr> */}
              {/* {this.ApprovedPurchaseList()} */}

              {this.state.List.map((purchaser) => (
                      <tr
                        key={purchaser.id}
                        className={purchaser.selected ? "selected" : ""}
                      >
                        <th scope="row">
                          <input
                            type="checkbox"
                            checked={purchaser.selected}
                            className="form-check-input"
                            id="rowcheck{user.id}"
                            onChange={(e) => this.onItemCheck(e, purchaser)}
                          />
                        </th>
                        <td>{purchaser.prid}</td>
                        <td>{purchaser.prName}</td>
                        <td>{purchaser.description}</td>
                        <td>{purchaser.amount}</td>
                        <td>{purchaser.createdOn}</td>
                        <td>{purchaser.updatedOn}</td>
                        <td>{purchaser.status}</td>
                      </tr>
                    ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ApprovedPurchaseList;
