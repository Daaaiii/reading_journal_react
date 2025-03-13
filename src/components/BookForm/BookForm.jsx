import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './BookForm.css';

function BookForm({ addBook, editBook, books }) {
  const { id } = useParams();
  const existingBook = books?.find((book) => book.id === Number(id)) || null;

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  useEffect(() => {
    if (existingBook) {
      setFormData(existingBook);
    }
  }, [existingBook]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editBook({ id: Number(id), ...formData });
    } else {
      addBook(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </label>
      <label>
        Author:
        <input type="text" name="author" value={formData.author} onChange={handleChange} required />
      </label>
      <label>
        Genre:
        <input type="text" name="genre" value={formData.genre} onChange={handleChange} required />
      </label>
      <label>
        Year:
        <input type="text" name="year" value={formData.year} onChange={handleChange} required />
      </label>
      <button type="submit">{id ? "Edit Book" : "Add Book"}</button>
    </form>
  );
}

export default BookForm;