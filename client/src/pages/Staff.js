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
    timer: [0, 0, 0, 0, 0]
  };

  UNSAFE_componentWillMount() {
    var intervalId = setInterval(() => {
      var dupArr = this.state.timer;
      dupArr[0] += 10;
      this.setState({
        timer: dupArr
      });

      if (dupArr[0] === 100) {
        clearInterval(intervalId);
      }
    }, 1 * 1000);
  }
  UNSAFE_componentWillMount() {
    var intervalId2 = setInterval(() => {
      var dupArr = this.state.timer;
      dupArr[1] += 10;
      this.setState({
        timer: dupArr
      });
      if (dupArr[1] === 100) {
        clearInterval(intervalId2);
      }
    }, 1 * 1000);
  }

  UNSAFE_componentWillMount() {
    var intervalId2 = setInterval(() => {
      var dupArr = this.state.timer;
      dupArr[2] += 10;
      this.setState({
        timer: dupArr
      });
      if (dupArr[2] === 100) {
        clearInterval(intervalId2);
      }
    }, 1 * 1000);
  }

  UNSAFE_componentWillMount() {
    var intervalId4 = setInterval(() => {
      var dupArr = this.state.timer;
      dupArr[3] += 10;
      this.setState({
        timer: dupArr
      });
      if (dupArr[3] === 100) {
        clearInterval(intervalId4);
      }
    }, 1 * 1000);
  }

  UNSAFE_componentWillMount() {
    var intervalId5 = setInterval(() => {
      var dupArr = this.state.timer;
      dupArr[4] += 10;
      this.setState({
        timer: dupArr
      });
      if (dupArr[4] === 100) {
        clearInterval(intervalId5);
      }
    }, 1 * 1000);
  }

  UNSAFE_componentWillMount() {
    var intervalId6 = setInterval(() => {
      var dupArr = this.state.timer;
      dupArr[5] += 10;
      this.setState({
        timer: dupArr
      });
      if (dupArr[5] === 100) {
        clearInterval(intervalId6);
      }
    }, 1 * 1000);
  }

  UNSAFE_componentDidMount() {
    console.log(this.props.location.state.patient);
    this.setState({
      patient: { ...this.props.location.state.patient, TS: "" }
    });
  }

  render() {
    const { patient } = this.state;
    return (
      <Container fluid>
        <Nav></Nav>
        <Jumbotron>
          <h3>
            {" "}
            {patient.FirstName} <br></br>
            {patient.LastName} <br></br>
            {patient.birth} <br></br>
            {patient.Gender}
          </h3>
        </Jumbotron>
        <Row>
          <Timer></Timer>
          <Col size="md-6 sm-12">
            <ProgressRadial progress={0} />
          </Col>
        </Row>
        <AdditionalInfo> extra information fron blood bank </AdditionalInfo>
        <Footer></Footer>
      </Container>
    );
  }
}

export default Staff;
