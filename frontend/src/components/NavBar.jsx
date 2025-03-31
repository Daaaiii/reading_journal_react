import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "var(--background-dark)", width: "100%", }}
    >
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            color: "var(--text-primary)",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Book Manager
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto" style={{ gap: "15px" }}>
            <li className="nav-item d-flex">
              <Link
                className="nav-link btn btn-outline-light w-100"
                to="/"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item d-flex">
              <Link
                className="nav-link btn btn-outline-light w-100"
                to="/books"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                Books
              </Link>
            </li>

            <li className="nav-item d-flex">
              <Link
                className="nav-link btn btn-outline-light w-100"
                to="/add-book"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                Add Book
              </Link>
            </li>

            <li className="nav-item d-flex">
              <Link
                className="nav-link btn btn-outline-light w-100"
                to="/about"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1rem",
                  textAlign: "center",
                }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
