import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotesList from "./NotesList";

jest.mock("./NoteCard/NoteCard", () => ({ id, title, subtitle, content }) => (
  <div data-testid="note-card">
    <h2>{title}</h2>
    <p>{subtitle}</p>
    <p>{content}</p>
  </div>
));

describe("NotesList", () => {
  const notes = [
    { id: "1", title: "Title 1", subtitle: "Subtitle 1", content: "Content 1" },
    { id: "2", title: "Title 2", subtitle: "Subtitle 2", content: "Content 2" },
  ];

  test("renders NotesList with correct number of NoteCard components", () => {
    render(
      <MemoryRouter>
        <NotesList notes={notes} />
      </MemoryRouter>
    );

    const noteCards = screen.getAllByTestId("note-card");
    expect(noteCards).toHaveLength(notes.length);
  });

  test("renders NoteCard components with correct data", () => {
    render(
      <MemoryRouter>
        <NotesList notes={notes} />
      </MemoryRouter>
    );

    notes.forEach((note) => {
      expect(screen.getByText(note.title)).toBeInTheDocument();
      expect(screen.getByText(note.subtitle)).toBeInTheDocument();
      expect(screen.getByText(note.content)).toBeInTheDocument();
    });
  });

  test("each NoteCard is wrapped in a Link with correct href", () => {
    render(
      <MemoryRouter>
        <NotesList notes={notes} />
      </MemoryRouter>
    );

    notes.forEach((note) => {
      const link = screen.getByText(note.title).closest("a");
      expect(link).toHaveAttribute("href", `/note/${note.id}`);
    });
  });
});
