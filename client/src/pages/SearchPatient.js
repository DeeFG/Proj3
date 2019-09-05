import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import Nav from "../components/Nav/index";

class SearchPatient extends Component {
  state = {
    id: "",
    FirstName: "",
    LastName: "",
    birth: "",
    Gender: "",

    redirect: false
  };

  componentDidMount() {
    this.loadPatient();
  } 

  loadPatient = () => {
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

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/patient",
            state: { patient: this.state.patientData }
          }}
        />
      );
    }
    return (
      <Container fluid>
        <Nav></Nav>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Welcome to Fast Blood please enter your patient's Medical Record
                Number 
              </h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.id}
                onChange={this.handleInputChange}
                name="id"
                placeholder="Medical record Number (required)"
              />
            </form>{" "}
            {"\n"}
            <FormBtn disabled={!this.state.id} onClick={this.handleSearchById}>
              {" "}
              Find patientby HRN
            </FormBtn>
            <div></div>
            <div></div>
            <div></div>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchPatient;
