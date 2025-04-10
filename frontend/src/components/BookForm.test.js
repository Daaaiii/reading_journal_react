import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";
import BookForm from "./BookForm";
import { jest } from "@jest/globals";
const renderComRoteador = (ui, { rota = "/" } = {}) => {
  window.history.pushState({}, "Página de teste", rota);
  return render(ui, { wrapper: BrowserRouter });
};

describe("Componente BookForm", () => {
  const mockAdicionarLivro = jest.fn();
  const mockEditarLivro = jest.fn();
  const livrosMock = [
    {
      id: 1,
      title: "Livro Teste",
      author: "Autor 1",
      genre: "Gênero 1",
      year: "2020",
      readAt: "2021-01-01",
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renderiza o formulário de adição de livro", () => {
    renderComRoteador(
      <BookForm addBook={mockAdicionarLivro} editBook={mockEditarLivro} books={[]} />
    );

    expect(screen.getByText("Add New Book")).toBeInTheDocument();
    expect(screen.getByLabelText(/Title:/i)).toBeInTheDocument();
  });

  test("envia o formulário e chama a função addBook", () => {
    renderComRoteador(
      <BookForm addBook={mockAdicionarLivro} editBook={mockEditarLivro} books={[]} />
    );

    // Preenche os campos
    fireEvent.change(screen.getByLabelText(/Title:/i), {
      target: { value: "Novo Livro", name: "title" },
    });
    fireEvent.change(screen.getByLabelText(/Author:/i), {
      target: { value: "Joana Silva", name: "author" },
    });
    fireEvent.change(screen.getByLabelText(/Genre:/i), {
      target: { value: "Romance", name: "genre" },
    });
    fireEvent.change(screen.getByLabelText(/Year:/i), {
      target: { value: "2022", name: "year" },
    });
    fireEvent.change(screen.getByLabelText(/Read:/i), {
      target: { value: "2023-01-01", name: "readAt" },
    });

    // Clica no botão de envio
    fireEvent.click(screen.getByRole("button", { name: /Add Book/i }));

    // Verifica se a função foi chamada corretamente
    expect(mockAdicionarLivro).toHaveBeenCalledWith({
      title: "Novo Livro",
      author: "Joana Silva",
      genre: "Romance",
      year: "2022",
      readAt: "2023-01-01",
    });
  });

  test("renderiza o formulário de edição quando há ID na URL", () => {
    render(
      <MemoryRouter initialEntries={["/edit-book/1"]}>
        <Routes>
          <Route
            path="/edit-book/:id"
            element={
              <BookForm
                addBook={mockAdicionarLivro}
                editBook={mockEditarLivro}
                books={livrosMock}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByDisplayValue("Livro Teste")).toBeInTheDocument();
    expect(screen.getByText("Edit Book")).toBeInTheDocument();
  });

  test("chama a função editBook ao enviar o formulário de edição", () => {
    render(
      <MemoryRouter initialEntries={["/edit-book/1"]}>
        <Routes>
          <Route
            path="/edit-book/:id"
            element={
              <BookForm
                addBook={mockAdicionarLivro}
                editBook={mockEditarLivro}
                books={livrosMock}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    // Altera o título
    fireEvent.change(screen.getByLabelText(/Title:/i), {
      target: { value: "Livro Atualizado", name: "title" },
    });

    // Envia o formulário
    fireEvent.click(screen.getByRole("button", { name: /Update Book/i }));

    // Verifica se editBook foi chamado com os dados atualizados
    expect(mockEditarLivro).toHaveBeenCalledWith({
      id: 1,
      title: "Livro Atualizado",
      author: "Autor 1",
      genre: "Gênero 1",
      year: "2020",
      readAt: "2021-01-01",
    });
  });
});