import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  test("renders the button with children", () => {
    render(<Button>New note</Button>);
    expect(screen.getByText(/new note/i)).toBeInTheDocument();
  });

  test("calls onClick when clicked", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>New note</Button>);
    fireEvent.click(screen.getByText(/new note/i));

    expect(handleClick).toHaveBeenCalled();
  });
});
