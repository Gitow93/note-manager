import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LanguageButton from "./LanguageButton"; // Ajusta la ruta de importación según sea necesario

describe("LanguageButton", () => {
  test("renders the button with the correct image and responds to click events", () => {
    const mockOnClick = jest.fn();
    const imageProps = {
      src: "path/to/image.png",
      alt: "Descripción de la imagen",
    };

    render(
      <LanguageButton id="test-button" onClick={mockOnClick} img={imageProps} />
    );

    const image = screen.getByRole("img", { name: "Descripción de la imagen" });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "path/to/image.png");

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
