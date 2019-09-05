import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import ProgressRadial from "../components/progressbar/index";
import Nav from "../components/Nav/index";
import Footer from "../components/Footer";
import AdditionalInfo from "../components/AdditionalInfo";
import Timer from "../components/timer";
import Moment from "react-moment";
import "moment-timezone";

// const testTiming = {
//   TS: 40,
//   "2ype": 10,
//   DAT: 15,
//   Elution: 180,
//   Titer: 180,
//   FullXM: 60
// };

//  enter data for pt

class Staff extends Component {
  state = {
    patient: {},
    timer: [0, 0, 0, 0, 0],
    testData: null,
    productData:null
  };

  componentDidMount() {
    const id = this.props.location.state.patient.patient.id;
    API.getTesting(id).then(response => {
      this.setState({
        testData: response.data.patient
      });
    });

    const patient = this.props.location.state.patient.patient;
    this.setState({
      patient: patient
    });
  }
  

  render() {
    return (
      <Container fluid>
        <Nav></Nav>
        <Jumbotron  style={{ height: 100, clear: "both", paddingTop: 50, textAlign: "center" }}>

 <h2>
 
        <Row>
        <Col size="md-1">
          </Col>
          <Col size="md-3">
            {this.state.patient.LastName},{this.state.patient.FirstName}
          </Col>
          <Col size="md-3">
<Moment format="MM/DD/YYYY">{this.state.patient.birth}</Moment>
          </Col>
          <Col size="md-3">
       {this.state.patient.Gender}
          </Col>
          <Col size="md-1">
          </Col>
        
           </Row>       
          </h2>

        </Jumbotron>

        <Row>
          
          <Col size="md-12 sm-12">
            
          <Timer></Timer>
        </Col>
        </Row>

        <Row>
          <Col size="md-12 sm-12">
            {this.state.testData !== null ? (
              <ProgressRadial testData={this.state.testData} />
            ) : (
              <h1>Loading...</h1>
            )}
          </Col>
        </Row>
        <Footer></Footer>
      </Container>
    );
  }
}

export default Staff;

