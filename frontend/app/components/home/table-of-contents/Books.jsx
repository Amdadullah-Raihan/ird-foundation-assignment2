// "use server";

const Books = async () => {
  const response = await fetch("http://localhost:5000/books");
  const books = await response.json();
  console.log(books);

  if (!books.books) return <div>Loading books...</div>;

  return (
    <div>
      {books.books.map((books) => (
        <p key={books.id}>{books.title}</p>
      ))}
    </div>
  );
};

export default Books;
