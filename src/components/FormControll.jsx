import { Container, Row, Col, Form } from "react-bootstrap";
import { Component } from "react";
class FormControl extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <FormControl className=" mb-3" />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default FormControl;
