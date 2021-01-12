import React from "react";
import logo from "../assets/logo-stackoverflow.png";
import {
  Container,
  Row,
  Col,
  Image,
  InputGroup,
  FormControl
} from "react-bootstrap";

class Search extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center" style={{ height: "100vh" }}>
          <Col className="text-center">
            <Image
              src={logo} alt="stack-logo"
              width="180"
              style={{ margin: "20px" }}
            />
            <InputGroup ref="query" onKeyPress={this.props.search} size="lg">
              <FormControl aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;