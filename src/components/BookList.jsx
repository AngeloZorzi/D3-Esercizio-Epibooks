import { Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  return (
    <Row className="g-2">
      {books.slice(0, 10).map((book) => (
        <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
          <SingleBook book={book} />
        </Col>
      ))}
    </Row>
  );
};

export default BookList;
