import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Welcome testing", () => {
  it("mounts correctly Welcome", () => {
    //1
    render(<Welcome />);
    //2
    const alert = screen.getByRole("alert");
    //3 skip
    //4
    expect(alert).toBeTruthy();
  });
});
