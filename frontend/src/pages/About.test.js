import { render, screen } from "@testing-library/react";
import About from "./About";
import React from "react";


describe("Componente About", () => {
  test("exibe o título 'About Us'", () => {
    render(<About />);
    const title = screen.getByText(/about us/i); 
    expect(title).toBeInTheDocument();
  });

  test("exibe a descrição do app", () => {
    render(<About />);
    const description = screen.getByText(/This is a simple application to manage a collection of books/i);
    expect(description).toBeInTheDocument();
  });

  test("exibe o texto sobre o desenvolvimento da aplicação", () => {
    render(<About />);
    const developmentText = screen.getByText(
      /This app was developed as part of the Frontend Development course at/i
    );
    expect(developmentText).toBeInTheDocument();
  });

  test("verifica se o nome PUCRS está dentro de uma tag <strong>", () => {
    render(<About />);
    const pucrs = screen.getByText(/PUCRS/i);
    expect(pucrs).toContainHTML("<strong>PUCRS</strong>"); 
  });

  test("verifica se o nome React está dentro de uma tag <strong>", () => {
    render(<About />);
    const react = screen.getByText(/React/i);
    expect(react).toContainHTML("<strong>React</strong>"); 
  });

  test("verifica se o nome Vite está dentro de uma tag <strong>", () => {
    render(<About />);
    const vite = screen.getByText(/Vite/i);
    expect(vite).toContainHTML("<strong>Vite</strong>"); 
  });
});
