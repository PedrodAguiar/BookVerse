import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { searchBooks } from "../../services/bookService";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (query.length < 4) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      const results = await searchBooks(query, 6);
      setSuggestions(results);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (book) => {
    setQuery(book.titulo);
    setSuggestions([]);
    onSearch(book.titulo);
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div ref={containerRef} className="relative w-[30%] mx-auto mt-8">
      <div className="flex bg-white rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Buscar livros..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full outline-none bg-transparent"
        />
        <button onClick={handleSearch} className="cursor-pointer outline-none">
          <div className="bg-[#326589] p-2 rounded-full">
            <Search className="text-white w-5 h-5" />
          </div>
        </button>
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute w-full bg-white rounded-xl mt-1 shadow-lg z-10 overflow-hidden">
          {suggestions.map((book, index) => (
            <li
              key={index}
              onClick={() => handleSelect(book)}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {book.capa && (
                <img
                  src={book.capa}
                  alt={book.titulo}
                  className="w-8 h-12 object-cover rounded"
                />
              )}
              <div>
                <p className="font-medium text-sm">{book.titulo}</p>
                <p className="text-xs text-gray-500">{book.autor}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
