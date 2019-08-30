import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import ProgressRadial from "../components/progressbar/index";
import Nav from "../components/Nav/index";
import Footer from "../components/Footer";
import AdditionalInfo from "../components/AdditionalInfo";
import Timer from "../components/timer";
import Moment from 'react-moment';
import 'moment-timezone';


const testTiming = {
  "TS":40,
  "2Type": 10,
  "DAT": 15,
  "Elution":190,
  "Titer": 190,
  "FullXM": 60
};

//  enter data for pt






class Staff extends Component {
  state = {
    FirstName: "",
    LastName: "",
    birth: "",
    Gender: ""
  };

  componentDidMount() {
    
    console.log(this.props.location.state.patient.patient);
    this.setState({
      FirstName: this.props.location.state.patient.patient.FirstName,
      LastName: this.props.location.state.patient.patient.LastName,
      birth: this.props.location.state.patient.patient.birth,
      Gender: this.props.location.state.patient.patient.Gender
      
    });

  //   export default class MyComponent extends React.Component {
  //     render() {
  //         return (
  //             const dateToFormat = new Date('1976-04-19T12:59-0500');
  //             <Moment date={dateToFormat} />
  //         );
  //     }
  // }
  
    // console.log(this.state);
    // this.loadPatient();
  }

  // loadPatient = () => {
  //   API.getPatient()
  //     .then(res =>
  //       this.setState({ FirstName: "", LastName: "", birth: "", Gender: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    if (
      this.state.TS &&
      this.state.ConfType &&
      this.state.DAT &&
      this.state.ABID
    ) {
      API.savePatient({
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
    return (
      <Container fluid>
        <Nav></Nav>
        <Jumbotron>
           <h3> {this.state.FirstName} <br></br>
           {this.state.LastName} <br></br>
           {this.state.birth} <br></br>
           {this.state.Gender}</h3>  
          
        </Jumbotron>
        <Row>
          <Timer></Timer>
          <Col size="md-6 sm-12">
            <ProgressRadial progress="20" />
          </Col>
  
        </Row>
        <AdditionalInfo> extra information fron blood bank </AdditionalInfo>
        <Footer></Footer>
      </Container>
    );
  }
}




//updated tiome every 30 sec
// export default class MyComponent extends React.Component {
//   render() {
//       return (
//           <Moment interval={30000}>
//               1976-04-19T12:59-0500
//           </Moment>
//       );
//   }
// }

export default Staff;
