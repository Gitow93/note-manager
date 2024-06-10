import React from "react";
import { render, screen } from "@testing-library/react";
import SubmitButton from "./SubmitButton";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n/i18n";

const renderWithI18n = (ui) => {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);
};

describe("SubmitButton", () => {
  const renderSubmitButton = (props) => {
    renderWithI18n(<SubmitButton {...props} />);
  };

  it("should render SubmitButton with given props", () => {
    renderSubmitButton({ titleError: false, contentError: false });

    expect(
      screen.getByRole("button", { name: /save note/i })
    ).toBeInTheDocument();
  });

  it("should disable the button if titleError is true", () => {
    renderSubmitButton({ titleError: true, contentError: false });

    expect(screen.getByRole("button", { name: /save note/i })).toBeDisabled();
  });

  it("should disable the button if contentError is true", () => {
    renderSubmitButton({ titleError: false, contentError: true });

    expect(screen.getByRole("button", { name: /save note/i })).toBeDisabled();
  });

  it("should enable the button if there are no errors", () => {
    renderSubmitButton({ titleError: false, contentError: false });

    expect(
      screen.getByRole("button", { name: /save note/i })
    ).not.toBeDisabled();
  });
});
