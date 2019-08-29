import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Nav from "../components/Nav";
import Checkbox from "../components/Checkbox";
import Timer from "../components/timer/index";

const Testing = [
  "Type and Screen",
  "Confirm Type",
  "ABID",
  "DAT",
  "Elution",
  "Titer",
  "FullXM"
];
const Products = ["Red Cells", "Plasma", "Platelets", "Cryo"];
const Antibody = [
  "E",
  "K",
  "C",
  "c",
  "E",
  "e",
  "D",
  "M",
  "N",
  "S",
  "s",
  "K",
  "k",
  "Kpa",
  "Jsa",
  "Fya",
  "Fyb",
  "Jka",
  "JKb"
];

class Orders extends Component {
  state = {
    checkboxes: Testing.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),
    checkboxes: Products.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),
    checkboxes: Antibody.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  // selectAllCheckboxes = isSelected => {
  //   Object.keys(this.state.checkboxes).forEach(checkbox => {
  //     // BONUS: Can you explain why we pass updater function to setState instead of an object?
  //     this.setState(prevState => ({
  //       checkboxes: {
  //         ...prevState.checkboxes,
  //         [checkbox]: isSelected
  //       }
  //     }));
  //   });
  // };

  // selectAll = () => this.selectAllCheckboxes(true);

  // deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        console.log(checkbox, "is selected.");
        //save informstion to data base
        // event.preventDefault();
        // if (
        //
        //   this.state.TS &&
        //   this.state.ConfType &&
        //   this.state.DAT &&
        //   this.state.ABID
        // ) {
        //   API.saveTesting({
        //     FirstName: this.state.FirstName,
        //     LastName: this.state.LastName,
        //     birth: this.state.birth,
        //     Gender: this.state.Gender
        //   })
        //     .then(res => this.loadPatient())
        //     .catch(err => console.log(err));
        // }

        // updat progress bar
        // var chart = new ApexCharts(el, options);
        // chart.updateSeries([{
        //   data: [32, 44, 31, 41, 22]
        // }])
        // // example of series in another format
        // chart.updateSeries([{
        //   data: [{
        //     x: "02-02-2002",
        //     y: 44
        //   }, {
        //     x: "12-02-2002",
        //     y: 51
        //   }]
        // }])
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxesTesting = () => Testing.map(this.createCheckbox);
  createCheckboxesProducts = () => Products.map(this.createCheckbox);
  createCheckboxesAntibody = () => Antibody.map(this.createCheckbox);

  render() {
    return (
      <div className="container">
        <Nav></Nav>
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
            ============== Testing to Order==================
              {this.createCheckboxesTesting()}
            ==============  Products to Order================== 
              
              {this.createCheckboxesProducts()}
              ==============  Products to Order==================

              {this.createCheckboxesAntibody()}
              ================================
              <div className="form-group mt-2">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Orders;


{/*  update profgerss bar  */}

// function updateProgress(){

// const chart = new ApexCharts(el, options);
// if(value === "Type and Screen" || "Confirm Type" ){
//   chart.appendSeries({
//     name: 'Testing',
//     data: [10]
//   });
  
  
// function updateTimer(){
//   this.timer = setInterval(() => {
//     const newCount = this.state.count - 1;
//     this.setState({
//       count: newCount >= 0 ? newCount : 0,
//       running: true,
//     });
//   }, 4000);
  

// };


