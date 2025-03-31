import React from "react";
import { render, screen, fireEvent, test, expect, jest } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookList from "./BookList";


const books = [
  { id: 1, title: "Livro Teste", author: "Autor Teste", year: "2024", readAt: "2024-03-15" },
];

it("deve renderizar uma lista de livros", () => {
  render(
    <BrowserRouter>
      <BookList books={books} deleteBook={() => {}} />
    </BrowserRouter>
  );

  expect(screen.getByText("Livro Teste")).toBeInTheDocument();
  expect(screen.getByText("Autor Teste")).toBeInTheDocument();
  expect(screen.getByText("Publicado em: 2024")).toBeInTheDocument();
});

it("deve chamar a função de deletar ao clicar no botão de excluir", () => {
  const mockDeleteBook = jest.fn();
  
  render(
    <BrowserRouter>
      <BookList books={books} deleteBook={mockDeleteBook} />
    </BrowserRouter>
  );

  const deleteButton = screen.getByRole("button", { name: /excluir/i });
  fireEvent.click(deleteButton);

  expect(mockDeleteBook).toHaveBeenCalledTimes(1);
});
