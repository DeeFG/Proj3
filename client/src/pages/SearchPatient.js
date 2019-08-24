import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";



class SearchPatient extends Component {
  state = {
    FirstName: "", 
    LastName: "", 
    birth: "" , 
    Gender:""
  };

  componentDidMount() {
    this.loadPatient();
  }

  loadPatient = () => {
    API.getPatient()
      .then(res =>
        this.setState({ FirstName: "", LastName: "", birth: "" , Gender:""})
      )
      .catch(err => console.log(err));
  };

//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadPatient())
//       .catch(err => console.log(err));
//   };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.savePatient({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadPatient())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Welcome to Fast Blood please enter your patient's Medical Record NUmber  </h1>
            </Jumbotron>
            <form>

                <Input
                value={this.state.id}
                onChange={this.handleInputChange}
                name="id"
                placeholder="Medical record Number (required)"
              />
        
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Find Patient 
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchPatient;
