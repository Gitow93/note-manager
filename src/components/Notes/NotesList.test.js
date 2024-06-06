import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotesList from "./NotesList";

jest.mock("./NoteCard/NoteCard", () => ({ id, title, created_at, content }) => (
  <div data-testid="note-card">
    <h2>{title}</h2>
    <p>{created_at}</p>
    <p>{content}</p>
  </div>
));

describe("NotesList", () => {
  const notes = [
    {
      id: "1",
      title: "Title 1",
      created_at: "Subtitle 1",
      content: "Content 1",
    },
    {
      id: "2",
      title: "Title 2",
      created_at: "Subtitle 2",
      content: "Content 2",
    },
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
      expect(screen.getByText(note.created_at)).toBeInTheDocument();
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
