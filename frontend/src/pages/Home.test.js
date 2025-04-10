import { render, screen } from "@testing-library/react";
import Home from "./Home";
import React from "react";

describe("Componente Home", () => {
  test("exibe o título 'Welcome to the Book Store!'", () => {
    render(<Home />);
    const title = screen.getByText(/Welcome to the Book Store!/i);
    expect(title).toBeInTheDocument();
  });

  test("exibe a imagem do logo", () => {
    render(<Home />);
    const logoImage = screen.getByAltText("Book Store");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "./src/assets/logo.png");
  });

  test("exibe o texto 'Your favorite place to manage books.'", () => {
    render(<Home />);
    const text = screen.getByText(/Your favorite place to manage books./i);
    expect(text).toBeInTheDocument();
  });
});
