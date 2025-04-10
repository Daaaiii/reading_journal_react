import React from "react";
import { render } from "@testing-library/react";
import AddBook from "./AddBook";
import BookForm from "../components/BookForm";


jest.mock("../components/BookForm", () => jest.fn(() => <div>Mock do BookForm</div>));

describe("Componente AddBook", () => {
  const mockAddBook = jest.fn();
  const mockEditBook = jest.fn();
  const livros = [{
    id: 1,
    title: "Livro Teste",
    author: "Autor 1",
    genre: "Gênero 1",
    year: "2020",
    readAt: "2021-01-01",
  },];

  test("renderiza o componente BookForm", () => {
    const { getByText } = render(
      <AddBook addBook={mockAddBook} editBook={mockEditBook} books={livros} />
    );

    expect(getByText("Mock do BookForm")).toBeInTheDocument();
  });

  
});
