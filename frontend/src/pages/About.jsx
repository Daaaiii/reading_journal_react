import React from "react";

function About() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="fw-bold" style={{ color: "var(--text-primary)" }}>
        About Us
      </h1>

      <p className="fs-5 mt-3" style={{ color: "var(--text-secondary)" }}>
        This is a simple application to manage a collection of books.
      </p>

      <p className="fs-5" style={{ color: "var(--text-secondary)" }}>
        This app was developed as part of the Frontend Development course at <strong>PUCRS</strong> using <strong>React</strong> and <strong>Vite</strong>.
      </p>
    </div>
  );
}

export default About;
