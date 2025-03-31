import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import "./App.css";
import { getBooks, addBook, updateBook, deleteBook } from "./services/BookService";

function App() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBooks() {
      const data = await getBooks();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  const handleAddBook = async (book) => {
    const newBook = await addBook(book);
    if (newBook) {
      setBooks([...books, newBook]);
      navigate("/books");
    }
  };

  const handleEditBook = async (updatedBook) => {
    await updateBook(updatedBook.id, updatedBook);
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
    navigate("/books");
  };

  const handleDeleteBook = async (id) => {
    await deleteBook(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/books"
          element={<Books books={books} deleteBook={handleDeleteBook} />}
        />
        <Route path="/add-book" element={<AddBook addBook={handleAddBook} />} />
        <Route
          path="/edit-book/:id"
          element={<AddBook books={books} editBook={handleEditBook} />}
        />
      </Routes>
    </div>
  );
}

export default App;
