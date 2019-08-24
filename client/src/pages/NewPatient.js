import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import ProgressRadial from "../components/progressbar/index";
import Nav from "../components/Nav/index"
import Footer from "../components/Footer";
import AdditionalInfo from "../components/AdditionalInfo";

class NewPatient extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      
      <Container fluid>
          <Nav> <h3> Nav bar</h3></Nav>
    <Jumbotron>
              <h1>ADD PATIENT</h1>
           </Jumbotron>
        <Row>"
           
        <Col size="md-4">
        <form>
              <Input
                value={this.state.FirstName}
                onChange={this.handleInputChange}
                name="FirstName"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.LastName}
                onChange={this.handleInputChange}
                name="LastName"
                placeholder="Last Name (required)"
              />
                <Input
                value={this.state.birth}
                onChange={this.handleInputChange}
                name="birth"
                placeholder="Birth Date ( required)"
              />
                <Input
                value={this.state.Gender}
                onChange={this.handleInputChange}
                name="Gender"
                placeholder="Gender (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />

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
                Submit Book
              </FormBtn>
            </form>
          </Col>

        </Row>
        <AdditionalInfo> extra information fron blood bank </AdditionalInfo>
        <Footer></Footer>
      </Container>
    );
  }
}

export default NewPatient;
