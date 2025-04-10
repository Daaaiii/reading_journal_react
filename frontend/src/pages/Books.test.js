import React from "react";
import { render } from "@testing-library/react";
import Books from "./Books";
import BookList from "../components/BookList";

jest.mock("../components/BookList", () =>
  jest.fn(() => <div>Mock do BookList</div>)
);

describe("Componente Books", () => {
  const livrosMock = [
    { id: 1, title: "Dom Casmurro", author: "Machado de Assis", year: 1899 },
  ];
  const mockDeleteBook = jest.fn();

  test("exibe o título da página", () => {
    const { getByText } = render(
      <Books books={livrosMock} deleteBook={mockDeleteBook} />
    );
    expect(getByText("Books List")).toBeInTheDocument();
  });

  test("renderiza o componente BookList", () => {
    const { getByText } = render(
      <Books books={livrosMock} deleteBook={mockDeleteBook} />
    );
    expect(getByText("Mock do BookList")).toBeInTheDocument();
  });

});
