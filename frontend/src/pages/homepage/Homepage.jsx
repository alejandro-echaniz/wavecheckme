/* Homepage.jsx */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Homepage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Modal from "../../components/modal/Modal";
import SearchBar from "../../components/searchBar/SearchBar";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]); // Store search results
  const navigate = useNavigate();

  // Simulate fetching search results (replace this with actual API call)
  const fetchSearchResults = (query) => {
    const mockResults = [
      { id: 1, title: `Song matching "${query}"` },
      { id: 2, title: `Another song related to "${query}"` },
      { id: 3, title: `Yet another song for "${query}"` },
    ];
    setSearchResults(mockResults);
  };

  // Handle search submission
  const handleSearch = (query) => {
    setSearchQuery(query); // Update search query state
    setIsOpen(true); // Open modal
    fetchSearchResults(query); // Fetch results

    // Use navigate to update the URL without reloading the page
    navigate(`/search?q=${query}`, { replace: true });
  };

  return (
    <div className="App">
      <div className="content-wrapper d-flex flex-column min-vh-100">
        <Header className="w-100" />
        <main className="flex-grow-1 main-content d-flex align-items-center justify-content-center">
          <SearchBar placeholder="Enter a song" setSearchQuery={handleSearch} />
          {isOpen && (
            <Modal
              setIsOpen={setIsOpen}
              searchQuery={searchQuery}
              searchResults={searchResults}
            />
          )}
        </main>
        <Footer className="w-100" />
      </div>
    </div>
  );
};

export default Homepage;
