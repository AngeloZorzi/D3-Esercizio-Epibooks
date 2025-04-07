import { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  handleClick = () => {
    this.props.onSelect(this.props.book.asin);
  };

  render() {
    const { book, isSelected } = this.props;

    return (
      <Card
        className="book-cover d-flex flex-column"
        style={{
          border: isSelected ? "2px solid red" : "1px solid gray",
        }}
      >
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          onClick={this.handleClick}
        />
        <Card.Body>
          <Card.Title className="text-center">{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
