import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Logo from "./Logo";
import i18n from "../../i18n/i18n";

describe("Logo component", () => {
  test("renders the logo, heading, and subtitle within a link", () => {
    render(
      <Router>
        <Logo />
      </Router>
    );

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")).toBe("/");

    const image = screen.getByRole("img", { name: /notomatic logo/i });
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("header-logo.png");

    const title = screen.getByText(/notomatic/i);
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText(/manage your notes/i);
    expect(subtitle).toBeInTheDocument();
  });
});
