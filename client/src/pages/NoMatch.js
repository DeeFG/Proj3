import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Sorry, That medical record number does not exist.</h1>  
            <a href="#" class="btn btn-info"> Search Again  </a>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
