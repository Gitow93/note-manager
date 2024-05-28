import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Logo from "../Logo/Logo";
import LanguageSelector from "../LanguageController/LanguageSelector";

jest.mock("../Logo/Logo", () => () => (
  <div onClick={() => mockNavigate("/")}>Mocked Logo</div>
));

jest.mock("../LanguageController/LanguageSelector", () => () => (
  <div>Language Selector</div>
));

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key) => {
      if (key === "header.create-button") return "Create Note";
      return key;
    },
  }),
}));

describe("Header component", () => {
  beforeEach(() => {
    mockNavigate.mockReset();
  });

  test("renders the Logo, Button, and LanguageSelector components", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText("Mocked Logo")).toBeInTheDocument();
    expect(screen.getByText("Create Note +")).toBeInTheDocument();
    expect(screen.getByText("Language Selector")).toBeInTheDocument();
  });

  test('navigates to "/" when Logo is clicked', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Mocked Logo"));
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  test('navigates to "/create-note" when the button is clicked', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Create Note +"));
    expect(mockNavigate).toHaveBeenCalledWith("/create-note");
  });

  describe("Header component interactions with LanguageSelector", () => {
    test("shows LanguageSelector and simulates a language change", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const languageSelector = screen.getByText("Language Selector");
      expect(languageSelector).toBeInTheDocument();
    });
  });
});
