import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContentTextarea from "./ContentTextarea";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n/i18n";

const renderWithI18n = (ui) => {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);
};

describe("ContentTextarea", () => {
  const props = {
    content: "This is a content",
    handleContentChange: jest.fn(),
    contentError: "",
  };

  const propsWithError = {
    ...props,
    contentError: "Content is too short",
  };

  it("should render ContentTextarea with given props", () => {
    renderWithI18n(<ContentTextarea {...props} />);

    expect(screen.getByLabelText(/content/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue("This is a content")).toBeInTheDocument();
  });

  it("should display error message when there is an error", () => {
    renderWithI18n(<ContentTextarea {...propsWithError} />);

    expect(screen.getByText("Content is too short")).toBeInTheDocument();
  });

  it("should call handleContentChange on content change", () => {
    renderWithI18n(<ContentTextarea {...props} />);

    const textarea = screen.getByLabelText(/content/i);
    fireEvent.change(textarea, { target: { value: "New content" } });

    expect(props.handleContentChange).toHaveBeenCalledTimes(1);
    expect(props.handleContentChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should not allow more than 250 characters", () => {
    renderWithI18n(<ContentTextarea {...props} />);

    const textarea = screen.getByLabelText(/content/i);
    fireEvent.change(textarea, { target: { value: "A".repeat(251) } });

    expect(textarea.value.length).toBeLessThanOrEqual(250);
  });
});
