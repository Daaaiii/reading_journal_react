import React from "react";
import BookList from "../components/BookList";

function Books({ books, deleteBook }) {
  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold" style={{ color: "var(--text-primary)" }}>
        Books List
      </h1>

      <div className="mt-4">
        <BookList books={books} deleteBook={deleteBook} />
      </div>
    </div>
  );
}

export default Books;
