import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import { searchBooks } from './services/bookService'


function App() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchBooks(query);
    setBooks(results);
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-[linear-gradient(90deg,#002F52_35%,#326589)]">
      <Header />
      <SearchBar onSearch={handleSearch}/>
      <BookList books={books}/>
    </div>
  );
}

export default App;
