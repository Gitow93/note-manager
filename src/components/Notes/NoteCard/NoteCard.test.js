import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NoteCard from "./NoteCard";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n/i18n";
const renderWithI18n = (ui) => {
  return render(<I18nextProvider i18n={i18n}>{ui}</I18nextProvider>);
};

describe("NoteCard", () => {
  const props = {
    id: "1",
    title: "Test Title",
    created_at: "2023-01-01",
    content: "This is a short content.",
  };

  it("should render NoteCard with given props", () => {
    renderWithI18n(<NoteCard {...props} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("2023-01-01")).toBeInTheDocument();
    expect(screen.getByText("This is a short content.")).toBeInTheDocument();
  });

  it("should display delete button and handle click", () => {
    window.alert = jest.fn();
    renderWithI18n(<NoteCard {...props} />);

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);
    expect(window.alert).toHaveBeenCalledWith(`Delete ${props.id}`);
  });
});
