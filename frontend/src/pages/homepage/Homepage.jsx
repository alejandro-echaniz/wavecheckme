import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

import "./Homepage.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Modal from "../../components/modal/Modal";
import SearchBar from "../../components/searchBar/SearchBar";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const fetchSearchResults = (query) => {
    const mockResults = [
      { id: 1, title: `Song matching "${query}"` },
      { id: 2, title: `Another song related to "${query}"` },
      { id: 3, title: `Yet another song for "${query}"` },
    ];
    setSearchResults(mockResults);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setIsOpen(true);
    fetchSearchResults(query);
    navigate(`/search?q=${query}`, { replace: true });
  };

  return (
    <div className="App">
      <div className="content-wrapper d-flex flex-column min-vh-100">
        <Header className="w-100" />
        <main className="flex-grow-1 main-content d-flex align-items-center justify-content-center">
          <div className="centered-content">
            <TypeAnimation
              sequence={[
                "find your next favorite song",
                1000,
                "find your next favorite album",
                1000,
                "find your next favorite artist",
                1000,
                "find your next favorite band",
                1000,
                "find your next favorite genre",
                1000,
                "find your next favorite niche",
                1000,
                "find your next favorite vibe",
                1000,
                "find your next favorite song.",
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={0}
              className="sub-title"
            />

            <SearchBar
              placeholder="Enter a song"
              setSearchQuery={handleSearch}
            />
          </div>
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
