import { Row, Col, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  render() {
    const { books } = this.props;

    return (
      <>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <FormControl />
          </Col>
        </Row>
        <Row className="g-2">
          {books.slice(0, 10).map((book) => (
            <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default BookList;
