import React from "react";
import { render, screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";


it("deve renderizar a navbar com o título 'Book Manager'", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  expect(screen.getByText("Book Manager")).toBeInTheDocument();
});

it("deve conter links para Home, Books, Add Book e About", () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("Books")).toBeInTheDocument();
  expect(screen.getByText("Add Book")).toBeInTheDocument();
  expect(screen.getByText("About")).toBeInTheDocument();
});
