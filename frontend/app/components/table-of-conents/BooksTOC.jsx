import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";

const BooksTOC = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://ihadis-server.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books);
      });
  }, []);

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.book_name} book={book} />
      ))}
    </div>
  );
};

export default BooksTOC;
