import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("Componente NavBar", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
  });

  test("renderiza o título 'Book Manager'", () => {
    const titulo = screen.getByText("Book Manager");
    expect(titulo).toBeInTheDocument();
    expect(titulo.closest("a")).toHaveAttribute("href", "/");
  });

  test("renderiza o link 'Home' com a rota correta", () => {
    const linkHome = screen.getByText("Home");
    expect(linkHome).toBeInTheDocument();
    expect(linkHome.closest("a")).toHaveAttribute("href", "/");
  });

  test("renderiza o link 'Books' com a rota correta", () => {
    const linkBooks = screen.getByText("Books");
    expect(linkBooks).toBeInTheDocument();
    expect(linkBooks.closest("a")).toHaveAttribute("href", "/books");
  });

  test("renderiza o link 'Add Book' com a rota correta", () => {
    const linkAdd = screen.getByText("Add Book");
    expect(linkAdd).toBeInTheDocument();
    expect(linkAdd.closest("a")).toHaveAttribute("href", "/add-book");
  });

  test("renderiza o link 'About' com a rota correta", () => {
    const linkAbout = screen.getByText("About");
    expect(linkAbout).toBeInTheDocument();
    expect(linkAbout.closest("a")).toHaveAttribute("href", "/about");
  });
});
