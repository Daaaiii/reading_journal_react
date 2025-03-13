// src/pages/AddBook.jsx
import BookForm from "../components/BookForm/BookForm";


function AddBook({ addBook, editBook, books }) {
  return (
    <div>
      <h1>{editBook ? "Edit Book" : "Add New Book"}</h1>
      <BookForm addBook={addBook} editBook={editBook} books={books} />
    </div>
  );
}

export default AddBook;
