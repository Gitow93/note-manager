import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LanguageSelector from "./LanguageSelector";

jest.mock("react-i18next", () => {
  const React = require("react");
  const originalModule = jest.requireActual("react-i18next");

  const useMockTranslation = () => {
    const [language, setLanguage] = React.useState("en");
    const i18n = {
      ...originalModule.i18n,
      language,
      changeLanguage: (lang) => setLanguage(lang),
    };

    return {
      ...originalModule.useTranslation(),
      i18n,
    };
  };

  return {
    ...originalModule,
    useTranslation: useMockTranslation,
  };
});

describe("LanguageSelector", () => {
  test("toggles the language and updates the image on button click", () => {
    render(<LanguageSelector />);

    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(screen.getByRole("img").src).toContain("flag-spain.png");

    fireEvent.click(button);
    expect(screen.getByRole("img").src).toContain("flag-britain.png");
  });
});
