import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import { searchBooks } from "./services/bookService";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadInitialBooks = async () => {
      setLoading(true);
      const results = await searchBooks("book");
      setBooks(results);
      setLoading(false);
    };

    loadInitialBooks();
  }, []);

  const handleSearch = async (query) => {
    setLoading(true);
    const results = await searchBooks(query);
    setBooks(results);
    setLoading(false);
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-[linear-gradient(90deg,#002F52_35%,#326589)]">
      <Header />
      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <div className="flex justify-center items-center mt-20">
          <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
}

export default App;
