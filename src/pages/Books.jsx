import BookList from "../components/BookList/BookList";


function Books({ books, deleteBook }) {
  return (
    <div>
      <h1>Books List</h1>
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
}

export default Books;