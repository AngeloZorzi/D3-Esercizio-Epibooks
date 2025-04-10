import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
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
