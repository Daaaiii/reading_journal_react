import axios from "axios";

const API_URL = "http://localhost:5000/books";

export const getBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return [];
  }
};

export const getBookById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar livro:", error);
    return null;
  }
};

export const addBook = async (book) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar livro:", error);
    return null;
  }
};

export const updateBook = async (id, book) => {
  try {
    await axios.put(`${API_URL}/${id}`, book);
  } catch (error) {
    console.error("Erro ao editar livro:", error);
  }
};

export const deleteBook = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Erro ao excluir livro:", error);
  }
};
