import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import Checkbox from "../components/Checkbox";
import SearchPatient from "./SearchPatient";
import { Input, FormBtn } from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import { Redirect } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";



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
    id: "",
    testsToOrder: [],
    productsToOrder: [],
    antibodiesToOrder: [],
    FirstName: "", 
    LastName: "", 
    birth: "" , 
    Gender:"",
    redirect: false
  };

  // selectAll = () => this.selectAllCheckboxes(true);

  // deselectAll = () => this.selectAllCheckboxes(false);


  componentDidMount() {
    this.getPatient();
  }

  getPatient = () => {
    API.getPatient()
      .then(res =>
        this.setState({
          id: "",
          FirstName: "",
          LastName: "",
          birth: "",
          Gender: ""
        })
      )
      .catch(err => console.log(err));
  }; 

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


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearchById = event => {
    event.preventDefault();
    API.getPatientById(this.state.id)
      .then(response => {
        console.log(response.data);
        this.setState({ redirect: true, patientData: response.data });
      })
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.LastName && this.state.FirstName && this.state.birth) {
      API.getPatient({
        id: this.state.id,
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        birth: this.state.birth,
        Gender: this.state.Gender
      })
        .then(res => this.loadPatient())
        .catch(err => console.log(err));
    }
  };


  handleFormSubmit = async formSubmitEvent => {
    formSubmitEvent.preventDefault();
   
    console.log("Here");
    const testResponse = await API.createTesting(this.state.id, this.state.testsToOrder)
    const prodResponse = await API.createProducts(this.state.id, this.state.productsToOrder)
    const antiResponse = await API.createAntibodyComment(this.state.id, this.state.antibodiesToOrder)
    console.log(testResponse, prodResponse , antiResponse)
   
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
        <Jumbotron>  
          <h1>Add Testing and Products
          </h1>

        </Jumbotron>
        <form>
              <Input
                value={this.state.id}
                onChange={this.handleInputChange}
                checked={!this.state.checked }
                name="id"
                placeholder="Medical record Number (required)"
              />
            </form>{" "}
            {"\n"}
            <FormBtn disabled={!this.state.id} onClick={this.handleSearchById}>
              {" "}
              Find patientby HRN
            </FormBtn>

      
        <div className="row mt-5">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              ============== Testing to Order==================
              {this.createCheckboxesTesting()}

              ============== Products to Order==================
              {this.createCheckboxesProducts()}
              ============== Antibody Identified==================
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



