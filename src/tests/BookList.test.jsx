import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../components/BookList";

import books from "../data/romance.json";

describe("Cards render testing", () => {
  it("checks if the cards are shown correctly", () => {
    const romanceBooks = books.filter((book) => book.category === "romance");
    //1
    render(<BookList books={romanceBooks} category="romance" />);
    //2
    const cards = screen.queryAllByTestId("book-card");
    //3 skip
    //4
    expect(cards).toHaveLength(3);
  });
});
describe("changes border color", () => {
  it("checks if changes color on click", () => {
    const romanceBooks = books.filter((book) => book.category === "romance");
    render(<BookList books={romanceBooks} category="romance" />);
    const card = screen.getAllByTestId("book-card");
    const images = screen.getAllByTestId("book-card1");
    fireEvent.click(images[0]);
    expect(card[0]).toHaveStyle("border: 2px solid red");
  });
});
