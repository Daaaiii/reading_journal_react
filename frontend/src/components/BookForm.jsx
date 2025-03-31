import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BookForm({ addBook, editBook, books }) {
  const { id } = useParams();
  const existingBook = books?.find((book) => book.id === Number(id)) || null;

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    readAt: "",
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
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h2 className="text-center mb-4" style={{ color: "var(--text-primary)" }}>
          {id ? "Edit Book" : "Add New Book"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="author">Author:</label>
            <input
              type="text"
              name="author"
              id="author"
              className="form-control"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="genre">Genre:</label>
            <input
              type="text"
              name="genre"
              id="genre" 
              className="form-control"
              value={formData.genre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="year">Year:</label>
            <input
              type="text"
              name="year"
               id="year"
              className="form-control"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="readAt">Read:</label>
            <input
              type="text"
              name="readAt"
              id="readAt"
              className="form-control"
              value={formData.readAt}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "var(--button-primary)",
              color: "#fff",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "var(--button-hover)")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "var(--button-primary)")}
          >
            {id ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
