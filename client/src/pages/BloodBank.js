import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import Checkbox from "../components/Checkbox";

const Testing = [
  "Type and Screen",
  "Confirm Type",
  "DAT",
  "Elution",
  "Titer",
  "FullXM"
];
const Products = ["Red Cells", "Plasma", "Platelets", "Cryo"];
const Antibody = [
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
    id: 1,
    testsToOrder: [],
    productsToOrder: [],
    antibodiesToOrder: []
  };

  // selectAll = () => this.selectAllCheckboxes(true);

  // deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name, value } = changeEvent.target;
    let newVal = this.state[name];
    if(!newVal.includes(value)){
      newVal.push(value)
      this.setState({ [name]: newVal }, ()=> console.log(this.state))
    } else {
      newVal = newVal.filter(val => val !== value)
      this.setState({ [name]: newVal }, ()=> console.log(this.state))
    }
  };

  handleFormSubmit = async formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log("Here");
    const testResponse = await API.createTesting(this.state.id, this.state.testsToOrder)
    const prodResponse = await API.createProducts(this.state.id, this.state.productsToOrder)
    const antiResponse = await API.createAntibodyComment(this.state.id, this.state.antibodiesToOrder)
    console.log(testResponse)
   
  };

  createCheckbox = (option, section) => (
    <Checkbox
      label={option}
      section={section}
      isSelected={this.state[section].includes(option)}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxesTesting = () => Testing.map(test => this.createCheckbox(test, "testsToOrder"));
  createCheckboxesProducts = () => Products.map(prod => this.createCheckbox(prod, "productsToOrder"));
  createCheckboxesAntibody = () => Antibody.map(anti => this.createCheckbox(anti, "antibodiesToOrder"));

  render() {
    return (
      <div className="container">
        <Nav></Nav>
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              ============== Testing to Order==================
              {this.createCheckboxesTesting()}

              ============== Products to Order==================
              {this.createCheckboxesProducts()}
              ============== Products to Order==================
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

{
  /*  update profgerss bar  */
}

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
