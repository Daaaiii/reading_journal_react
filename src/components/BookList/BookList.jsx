import { Link } from "react-router-dom";
import "./BookList.css";

function BookList({ books, deleteBook }) {
  return (
    <ul>
      {books.map((book) => (
        <li class="booklist" key={book.id}>
          <h3>
            <strong>{book.title}</strong>
          </h3>
          <p>
            {book.author} ({book.year})
          </p>
          <div class="actions">
            <button onClick={() => deleteBook(book.id)}>Delete</button>
            <Link to={`/edit-book/${book.id}`}>Edit</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default BookList;
