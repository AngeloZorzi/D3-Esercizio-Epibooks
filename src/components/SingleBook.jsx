import { Card } from "react-bootstrap";

const SingleBook = function (props) {
  const handleClick = () => {
    props.onSelect(props.book.asin);
  };

  const { book, isSelected } = props;

  return (
    <Card
      data-testid="book-card"
      className="book-cover d-flex flex-column"
      style={{
        border: isSelected ? "2px solid red" : "1px solid gray",
      }}
    >
      <Card.Img
        variant="top"
        src={book.img}
        alt={book.title}
        onClick={handleClick}
      />
      <Card.Body>
        <Card.Title className="text-center">{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
