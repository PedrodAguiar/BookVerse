import React from "react";
import BookCard from "../BookCard";


const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return (
      <p className="text-center text-gray-400 mt-10">
        Nenhum livro encontrado.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-8 mt-6">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
