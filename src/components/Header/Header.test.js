import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
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

    expect(screen.getByText(/mocked logo/i)).toBeInTheDocument();
    expect(screen.getByText(/new note \+/i)).toBeInTheDocument();
  });

  test('navigates to "/create-note" when the button is clicked', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText(/new note \+/i));
    expect(mockNavigate).toHaveBeenCalledWith("/create-note");
  });
});
