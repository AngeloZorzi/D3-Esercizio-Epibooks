import { Row, Col, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Component } from "react";

class BookList extends Component {
  state = {
    search: "",
  };
  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { books, category } = this.props;
    const { search } = this.state;
    const categoryBooks = books.filter((book) => book.category === category);
    const filteredBooks = categoryBooks.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <FormControl
              className=" mb-3 bg-warning-subtle border border-1 border-dark rounded rounded-1"
              type="text"
              placeholder={`Cerca nella sezione ${category}... `}
              value={search}
              onChange={this.handleSearch}
            />
          </Col>
        </Row>
        <Row className="g-2">
          {filteredBooks.slice(0, 15).map((book) => (
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
