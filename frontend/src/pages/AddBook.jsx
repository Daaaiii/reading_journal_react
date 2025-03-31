import React from "react";
import BookForm from "../components/BookForm";


function AddBook({ addBook, editBook, books }) {
  
  return (
    <div>
      <BookForm addBook={addBook} editBook={editBook} books={books} />
    </div>
  );
}

export default AddBook;
