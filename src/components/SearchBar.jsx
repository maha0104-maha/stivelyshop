import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim();

    if (!query) {
      navigate("/search");
      return;
    }

    navigate(`/search?search=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-md items-center rounded-full border border-gray-300 bg-white px-4 py-2"
    >
      <FiSearch className="h-5 w-5 shrink-0 text-gray-500" />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="ml-3 w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
      />
    </form>
  );
};

export default SearchBar;