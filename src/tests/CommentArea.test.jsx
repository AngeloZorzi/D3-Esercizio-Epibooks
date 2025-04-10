import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

describe("CommentArea render testing", () => {
  it("checks if CommentArea is correctly mounted and shown", async () => {
    //1
    render(<CommentArea />);
    //2
    const sectionMounts = await screen.findByText(/ commenti/i);
    //3 skip
    //4
    expect(sectionMounts).toBeInTheDocument();
  });
});
