import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Button from "./Button";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Button component", () => {
  beforeEach(() => {
    mockNavigate.mockReset();
  });

  test("renders the button with children", () => {
    render(
      <BrowserRouter>
        <Button href="/test">New note</Button>
      </BrowserRouter>
    );

    const buttonElement = screen.getByText(/new note/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick and navigates to href when clicked", () => {
    const handleClick = jest.fn();

    render(
      <BrowserRouter>
        <Button onClick={handleClick} href="/test">
          New note
        </Button>
      </BrowserRouter>
    );

    const buttonElement = screen.getByText(/new note/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith("/test");
  });

  test("navigates to href when clicked even if onClick is not provided", () => {
    render(
      <BrowserRouter>
        <Button href="/test">New Note</Button>
      </BrowserRouter>
    );

    const buttonElement = screen.getByText(/new note/i);
    fireEvent.click(buttonElement);

    expect(mockNavigate).toHaveBeenCalledWith("/test");
  });
});
