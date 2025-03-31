import React from "react";

function Home() {
  return (
    <div className="container text-center mt-5">
      <h1 className="fw-bold" style={{ color: "var(--text-primary)" }}>
        Welcome to the Book Store!
      </h1>

      <img
        src="./src/assets/logo.png"
        alt="Book Store"
        className="img-fluid my-4"
        style={{ maxWidth: "250px" }}
      />

      <p className="fs-5" style={{ color: "var(--text-secondary)" }}>
        Your favorite place to manage books.
      </p>
    </div>
  );
}

export default Home;
