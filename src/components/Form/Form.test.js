import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Form from "./Form";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n/i18n";
import notesReducer from "../../redux/notesSlice";

const renderWithProviders = (ui, { store }) => {
  return render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>{ui}</I18nextProvider>
    </Provider>
  );
};

describe("Form", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        notes: notesReducer,
      },
    });

    store.dispatch = jest.fn();
  });

  it("should render the form with initial state", () => {
    renderWithProviders(<Form />, { store });

    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/content/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /save note/i })
    ).toBeInTheDocument();
  });

  it("should display title error if title is too short", () => {
    renderWithProviders(<Form />, { store });

    const titleInput = screen.getByLabelText(/title/i);
    fireEvent.change(titleInput, { target: { value: "ab" } });

    expect(
      screen.getByText(/the title must be at least 3 characters long/i)
    ).toBeInTheDocument();
  });

  it("should display title error if title is too long", () => {
    renderWithProviders(<Form />, { store });

    const titleInput = screen.getByLabelText(/title/i);
    fireEvent.change(titleInput, { target: { value: "a".repeat(21) } });

    expect(
      screen.getByText(/the title can't exceed 20 characters/i)
    ).toBeInTheDocument();
  });

  it("should display content error if content is too short", () => {
    renderWithProviders(<Form />, { store });

    const contentTextarea = screen.getByLabelText(/content/i);
    fireEvent.change(contentTextarea, { target: { value: "ab" } });

    expect(
      screen.getByText(/the content must be at least 3 characters long/i)
    ).toBeInTheDocument();
  });

  it("should dispatch createNote action with valid input", () => {
    renderWithProviders(<Form />, { store });

    const titleInput = screen.getByLabelText(/title/i);
    const contentTextarea = screen.getByLabelText(/content/i);
    const submitButton = screen.getByRole("button", { name: /save note/i });

    fireEvent.change(titleInput, { target: { value: "Valid Title" } });
    fireEvent.change(contentTextarea, { target: { value: "Valid Content" } });
    fireEvent.click(submitButton);

    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
  });

  it("should not dispatch createNote action with invalid input", () => {
    renderWithProviders(<Form />, { store });

    const titleInput = screen.getByLabelText(/title/i);
    const contentTextarea = screen.getByLabelText(/content/i);
    const submitButton = screen.getByRole("button", { name: /save note/i });

    fireEvent.change(titleInput, { target: { value: "ab" } });
    fireEvent.change(contentTextarea, { target: { value: "ab" } });
    fireEvent.click(submitButton);

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
