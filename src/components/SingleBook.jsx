import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    const { book } = this.props;

    return (
      <Card className="book-cover d-flex flex-column">
        <Card.Img variant="top" src={book.img} alt={book.title} />
        <Card.Body>
          <Card.Title className="text-center">{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
