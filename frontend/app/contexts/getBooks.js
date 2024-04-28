import React from "react";

const getBooks = async () => {
  const res = await fetch("http://localhost:5000/books");
  const books = res.json();

  return books;
};

export default getBooks;
