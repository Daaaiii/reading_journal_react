import React from "react";
import { Link } from "react-router-dom";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { formatDate } from "../utils/dateUtils";

function BookList({ books, deleteBook }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: "var(--background-light)" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: "var(--text-primary)" }}>
                  {book.title}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                <p className="card-text">
                  Published at: {book.year}
                </p>
                <p className="card-text">
                  Read at: {book.readAt ? formatDate(book.readAt) : "Não lido"}
                </p>
                <div className="d-flex justify-content-end gap-2">
                  <Link
                    to={`/edit-book/${book.id}`}
                    className="btn btn-outline-primary btn-sm"
                    style={{
                      borderColor: "var(--primary-color)",
                      color: "var(--primary-color)",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "var(--primary-color)";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "var(--primary-color)";
                    }}
                  >
                    <BsPencilSquare size={16} />
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => deleteBook(book.id)}
                    style={{
                      borderColor: "var(--button-hover)",
                      color: "var(--button-hover)",
                      transition: "all 0.3s ease-in-out",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "var(--button-hover)";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "var(--button-hover)";
                    }}
                  >
                    <BsTrash size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
