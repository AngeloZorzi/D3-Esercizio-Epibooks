import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { book } = this.props;

    return (
      <Card
        className="book-cover d-flex flex-column"
        style={{
          border: this.state.selected ? "2px solid red" : "1px solid gray",
        }}
      >
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          onClick={() => {
            this.setState({
              selected: !this.state.selected,
            });
          }}
        />
        <Card.Body>
          <Card.Title className="text-center">{book.title}</Card.Title>
          <Button variant="dark" className=" mt-auto">
            <CommentArea />
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
