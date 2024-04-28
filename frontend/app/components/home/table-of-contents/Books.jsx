// "use server";

const Books = async () => {
  const response = await fetch("https://ihadis-server.vercel.app/books");
  const books = await response.json();
  // console.log(books);

  if (!books.books) return <div>Loading books...</div>;

  return (
    <div>
      {books.books.map((books) => (
        <div
          key={books.id}
          className="flex items-center p-2 rounded-lg bg-green-50"
        >
          {" "}
          <p className="flex items-center justify-center w-10 h-10 mr-4 text-white primary-bg rounded-xl">
            B
          </p>{" "}
          {books.title}
        </div>
      ))}
    </div>
  );
};

export default Books;
