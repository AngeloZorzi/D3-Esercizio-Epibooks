import { Row, Col, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = function ({ books, category }) {
  // state = {
  //   search: "",
  //   selectedBookId: null,
  // };
  const [search, setSearch] = useState("");
  const [selectedBookId, setSelectedBookId] = useState(null);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleBookSelect = (bookId) => {
    setSelectedBookId((prevSelectedId) =>
      prevSelectedId === bookId ? null : bookId
    );
  };

  const categoryBooks = books.filter((book) => book.category === category);
  const filteredBooks = categoryBooks.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Row>
        {/* Colonna di sinistra: griglia libri */}
        <Col md={8}>
          <Row className="g-2">
            {filteredBooks.slice(0, 3).map((book) => (
              <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
                <SingleBook
                  book={book}
                  isSelected={selectedBookId === book.asin}
                  onSelect={() => handleBookSelect(book.asin)}
                />
              </Col>
            ))}
          </Row>
        </Col>

        {/* Colonna di destra: CommentArea */}
        <Col md={4}>
          {selectedBookId ? (
            <CommentArea bookId={selectedBookId} />
          ) : (
            <div className="text-muted">
              Seleziona un libro per vedere i commenti
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default BookList;

//Barra di ricerca  <Row className="justify-content-center">
//    <Col xs={12} md={6}>
//    <FormControl
//      className="mb-3 bg-warning-subtle border border-1 border-dark rounded rounded-1"
//      type="text"
//      placeholder={`Cerca nella sezione ${category}...`}
//      value={search}
//      onChange={this.handleSearch}
//    />
//  </Col>
//  </Row
