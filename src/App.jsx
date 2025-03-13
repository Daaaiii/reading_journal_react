import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const addBook = (book) => {
    setBooks([...books, { id: Date.now(), ...book }]);
    navigate("/books");
  };

  const editBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
    navigate("/books");
  };

  const deleteBook = (id) => {
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
          element={<Books books={books} deleteBook={deleteBook} />}
        />
        <Route path="/add-book" element={<AddBook addBook={addBook} />} />
        <Route
          path="/edit-book/:id"
          element={<AddBook books={books} editBook={editBook} />}
        />
      </Routes>
    </div>
  );
}

export default App;
