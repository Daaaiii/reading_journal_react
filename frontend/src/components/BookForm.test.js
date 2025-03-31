import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import BookForm from "./BookForm";
import { jest } from "@jest/globals";


const mockAddBook = jest.fn();
const mockEditBook = jest.fn();

const books = [
  { id: 99, title: "Book 1", author: "Author 1", genre: "Fiction", year: "2021", readAt: "2022-01-01" },
];

describe("BookForm", () => {
  test("deve renderizar o formulário com os campos vazios para adicionar um livro", () => {
    render(
      <BrowserRouter>
        <BookForm addBook={mockAddBook} editBook={mockEditBook} books={[]} />
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/Title:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Author:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Genre:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Year:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Read:/)).toBeInTheDocument();
  });

  test("deve renderizar o formulário com os dados do livro existente quando editando", async () => {

    render(
      <MemoryRouter initialEntries={["/edit-book/99"]}>
        <BookForm books={books} editBook={jest.fn()} />
      </MemoryRouter>
    );
  
    expect(screen.getByLabelText(/Title:/)).toHaveValue("Book 1");
    expect(screen.getByLabelText(/Author:/)).toHaveValue("Author 1");
    expect(screen.getByLabelText(/Genre:/)).toHaveValue("Fiction");
    expect(screen.getByLabelText(/Year:/)).toHaveValue("2021");
    expect(screen.getByLabelText(/Read:/)).toHaveValue("2022-01-01");

  });
  test("deve chamar a função addBook ao submeter o formulário para adicionar um livro", async () => {
    render(
      <BrowserRouter>
        <BookForm addBook={mockAddBook} editBook={mockEditBook} books={[]} />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/Title:/), { target: { value: "New Book" } });
    fireEvent.change(screen.getByLabelText(/Author:/), { target: { value: "New Author" } });
    fireEvent.change(screen.getByLabelText(/Genre:/), { target: { value: "Fantasy" } });
    fireEvent.change(screen.getByLabelText(/Year:/), { target: { value: "2023" } });
    fireEvent.change(screen.getByLabelText(/Read:/), { target: { value: "2023-03-01" } });

    fireEvent.click(screen.getByLabelText(/Add Book/));

    await waitFor(() => expect(mockAddBook).toHaveBeenCalledTimes(1));
    expect(mockAddBook).toHaveBeenCalledWith({
      title: "New Book",
      author: "New Author",
      genre: "Fantasy",
      year: "2023",
      readAt: "2023-03-01",
    });
  });

  test("deve chamar a função editBook ao submeter o formulário para editar um livro", async () => {
    render(
      <BrowserRouter>
        <BookForm addBook={mockAddBook} editBook={mockEditBook} books={books} />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/Title:/), { target: { value: "Updated Book" } });
    fireEvent.change(screen.getByLabelText(/Author:/), { target: { value: "Updated Author" } });
    fireEvent.change(screen.getByLabelText(/Genre:/), { target: { value: "Science Fiction" } });
    fireEvent.change(screen.getByLabelText(/Year:/), { target: { value: "2024" } });
    fireEvent.change(screen.getByLabelText(/Read:/), { target: { value: "2024-02-01" } });

    fireEvent.click(screen.getByLabelText(/Update Book/));

    await waitFor(() => expect(mockEditBook).toHaveBeenCalledTimes(1));
    expect(mockEditBook).toHaveBeenCalledWith({
      id: 1,
      title: "Updated Book",
      author: "Updated Author",
      genre: "Science Fiction",
      year: "2024",
      readAt: "2024-02-01",
    });
  });

  test("deve renderizar o título 'Add New Book' quando não houver id na URL", () => {
    render(
      <BrowserRouter>
        <BookForm addBook={mockAddBook} editBook={mockEditBook} books={[]} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Add New Book/)).toBeInTheDocument();
  });

  test("deve renderizar o título 'Edit Book' quando houver id na URL", () => {
    render(
      <BrowserRouter>
        <BookForm addBook={mockAddBook} editBook={mockEditBook} books={books} />
      </BrowserRouter>
    );
    expect(screen.getByText(/Edit Book/)).toBeInTheDocument();
  });
});
