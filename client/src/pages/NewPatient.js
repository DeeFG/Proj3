import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Nav from "../components/Nav/index";
import Moment from "react-moment";



class NewPatient extends Component {
  state = {
    FirstName: "", 
    LastName: "", 
    birth: "" , 
    Gender:""
  };

  


  
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


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleNewPatientSubmit = event => {
     event.preventDefault();
      API.createPatient({
        FirstName: this.state.FirstName, 
        LastName: this.state.LastName, 
        birth: this.state.birth , 
        Gender:this.state.Gender
      
      })  

        .then( ()=> this.setState({
          FirstName: "",
          LastName: "",
          birth: "",
          Gender: ""
        }))
        .catch(err => this.getPatient());
  };

  render() {
    return (
      
      <Container fluid>
          <Nav> <h3> Nav bar</h3></Nav>
    <Jumbotron>
              <h1>ADD PATIENT</h1>
              <h3>
            {/* {" "}
            {this.state.patient.LastName}, {this.state.patient.FirstName}
            <br></br>
            <Moment format="MM/DD/YYYY">{this.state.patient.birth}</Moment>
            <br></br>
            {this.state.patient.Gender} */}
          </h3>
              
           </Jumbotron>
        <Row>
           
        <Col size="md-4">
        <form>
              <Input
                value={this.state.FirstName}
                onChange={this.handleInputChange}
                name="FirstName"
                placeholder="First Name"
              />
              <Input
                value={this.state.LastName}
                onChange={this.handleInputChange}
                name="LastName"
                placeholder="Last Name "
              />
                <Input
                  type="date"
                value={this.state.birth}
                onChange={this.handleInputChange}
                name="birth"
                placeholder="Birth Date "
              />
                <Input
                value={this.state.Gender}
                onChange={this.handleInputChange}
                name="Gender"
                placeholder=" M or F "
              />
             {/* <Chosen>

             </Chosen> */}
              <FormBtn
                disabled={!(this.state.FirstName && this.state.LastName && this.state.birth && this.state.Gender)}
                onClick={this.handleNewPatientSubmit}
   
              >
                Save Patient
              </FormBtn>
            </form>
          </Col>

        </Row>
      </Container>
    );
  }
}



export default NewPatient;
