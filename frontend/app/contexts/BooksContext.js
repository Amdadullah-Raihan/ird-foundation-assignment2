"use client";
import getBooks from "./getBooks";

const { createContext, useContext } = require("react");

const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const books = getBooks();

  return (
    <BooksContext.Provider value={books}>{children}</BooksContext.Provider>
  );
};

export const useBooks = () => {
  return useContext(BooksContext);
};
