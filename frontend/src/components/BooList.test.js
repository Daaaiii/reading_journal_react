import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookList from "./BookList";

describe("Componente BookList", () => {
  const mockDeleteBook = jest.fn();
  const livrosMock = [
    {
      id: 1,
      title: "Livro Teste",
      author: "Autor 1",
      genre: "Romance",
      year: "2020",
      readAt: "2023-01-01",
    },
    {
      id: 2,
      title: "Livro Não Lido",
      author: "Autor 2",
      genre: "Ficção",
      year: "2019",
      readAt: null,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renderiza a lista de livros corretamente", () => {
    render(
      <MemoryRouter>
        <BookList books={livrosMock} deleteBook={mockDeleteBook} />
      </MemoryRouter>
    );

    // Verifica os títulos
    expect(screen.getByText("Livro Teste")).toBeInTheDocument();
    expect(screen.getByText("Livro Não Lido")).toBeInTheDocument();

    // Verifica autores
    expect(screen.getByText("Autor 1")).toBeInTheDocument();
    expect(screen.getByText("Autor 2")).toBeInTheDocument();

    // Verifica os anos
    expect(screen.getByText(/Published at: 2020/)).toBeInTheDocument();
    expect(screen.getByText(/Published at: 2019/)).toBeInTheDocument();
  });

 

  test("link de edição leva para a rota correta", () => {
    render(
      <MemoryRouter>
        <BookList books={livrosMock} deleteBook={mockDeleteBook} />
      </MemoryRouter>
    );

    const botoesEditar = screen.getAllByRole("link");
    expect(botoesEditar[0]).toHaveAttribute("href", "/edit-book/1");
    expect(botoesEditar[1]).toHaveAttribute("href", "/edit-book/2");
  });

  test("ao clicar no botão de deletar, chama deleteBook com o id correto", () => {
    render(
      <MemoryRouter>
        <BookList books={livrosMock} deleteBook={mockDeleteBook} />
      </MemoryRouter>
    );

    const botoesDeletar = screen.getAllByRole("button");

    fireEvent.click(botoesDeletar[0]); // botão do livro 1
    fireEvent.click(botoesDeletar[1]); // botão do livro 2

    expect(mockDeleteBook).toHaveBeenCalledTimes(2);
    expect(mockDeleteBook).toHaveBeenCalledWith(1);
    expect(mockDeleteBook).toHaveBeenCalledWith(2);
  });
});
