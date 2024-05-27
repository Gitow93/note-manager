import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

jest.mock("../Logo/Logo", () => () => <div>Mocked Logo</div>);

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Header component", () => {
  beforeEach(() => {
    mockNavigate.mockReset();
  });

  test("renders the Logo and Button components", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const logoElement = screen.getByText(/mocked logo/i);
    const buttonElement = screen.getByText(/new note \+/i);

    expect(logoElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('navigates to "/create-note" when the button is clicked', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const buttonElement = screen.getByText(/new note \+/i);
    fireEvent.click(buttonElement);

    expect(mockNavigate).toHaveBeenCalledWith("/create-note");
  });
});
