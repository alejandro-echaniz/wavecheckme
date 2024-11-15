/* SearchBar.jsx */

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import magnifying glass icon
import './SearchBar.css';

const SearchBar = ({ placeholder, setSearchQuery }) => {
  const [input, setInput] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      const trimmedInput = input.trim();
      if (trimmedInput) {
        setSearchQuery(encodeURIComponent(trimmedInput).replace(/%20/g, '+'));
        setHasError(false);
      } else {
        setHasError(true);
      }
    }
  };

  const handleClick = () => {
    const trimmedInput = input.trim();
    if (trimmedInput) {
      setSearchQuery(encodeURIComponent(trimmedInput).replace(/%20/g, '+'));
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="search">
      <div className={`searchInputs ${hasError ? 'error' : ''}`}>
        <input
          type="text"
          placeholder={placeholder}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (e.target.value.trim()) {
              setHasError(false);
            }
          }}
          onKeyDown={handleKeyDown}
        />
        {/* Magnifying Glass Icon */}
        <button
          className="search-icon"
          disabled={!input.trim()} // Disable if input is invalid
          onClick={handleClick}
        >
          <FaSearch />
        </button>
      </div>

      {hasError && <p className="error-message">Please enter a search term.</p>}
    </div>
  );
};

export default SearchBar;
