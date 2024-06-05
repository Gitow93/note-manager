import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NoteCard from "./NoteCard";

jest.mock("./../icons/trash-grey.png", () => "trash-grey.png");
jest.mock("./../icons/trash-red.png", () => "trash-red.png");

describe("NoteCard", () => {
  const defaultProps = {
    id: "1",
    title: "Test Title",
    subtitle: "Test Subtitle",
    content: "Test content goes here.",
  };

  test("renders NoteCard with title, subtitle, and content", () => {
    render(<NoteCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.subtitle)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.content)).toBeInTheDocument();
  });

  test("renders delete button with grey trash icon", () => {
    render(<NoteCard {...defaultProps} />);

    const deleteButton = screen.getByRole("button", { name: /Delete Button/i });
    expect(deleteButton).toBeInTheDocument();
    expect(screen.getByAltText("Grey Trash Icon")).toBeInTheDocument();
  });

  test("shows alert with id when delete button is clicked", () => {
    window.alert = jest.fn();

    render(<NoteCard {...defaultProps} />);

    const deleteButton = screen.getByRole("button", { name: /Delete Button/i });
    fireEvent.click(deleteButton);

    expect(window.alert).toHaveBeenCalledWith(`Delete ${defaultProps.id}`);
  });

  test("shows red trash icon when delete button is hovered", () => {
    render(<NoteCard {...defaultProps} />);

    const deleteButton = screen.getByRole("button", { name: /Delete Button/i });
    fireEvent.mouseOver(deleteButton);

    expect(screen.getByAltText("Red Trash Icon")).toBeInTheDocument();
  });
});
