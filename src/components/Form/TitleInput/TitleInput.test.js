import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TitleInput from "./TitleInput";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n/i18n";

const renderWithI18n = (ui) => {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);
};

describe("TitleInput", () => {
  const props = {
    title: "Test Title",
    handleTitleChange: jest.fn(),
    titleError: "",
  };

  const propsWithError = {
    ...props,
    titleError: "Title is too short",
  };

  it("should render TitleInput with given props", () => {
    renderWithI18n(<TitleInput {...props} />);

    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue("Test Title")).toBeInTheDocument();
  });

  it("should display error message when there is an error", () => {
    renderWithI18n(<TitleInput {...propsWithError} />);

    expect(screen.getByText("Title is too short")).toBeInTheDocument();
  });

  it("should call handleTitleChange on title change", () => {
    renderWithI18n(<TitleInput {...props} />);

    const input = screen.getByLabelText(/title/i);
    fireEvent.change(input, { target: { value: "New Title" } });

    expect(props.handleTitleChange).toHaveBeenCalledTimes(1);
    expect(props.handleTitleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
