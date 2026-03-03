const BookCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
      {book.capa ? (
        <img
          src={book.capa}
          alt={book.titulo}
          className="w-full h-56 object-cover"
        />
      ) : (
        <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Sem capa</span>
        </div>
      )}

      {/* Informações */}
      <div className="p-3">
        <h3 className="font-bold text-sm line-clamp-2">{book.titulo}</h3>
        <p className="text-xs text-gray-500 mt-1">{book.autor}</p>
      </div>
    </div>
  );
};

export default BookCard;
