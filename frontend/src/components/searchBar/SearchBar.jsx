/* SEARCHBAR.jsx */

import React from 'react';
import './SearchBar.css';

function SearchBar({ placeholder, setSearchQuery }) {

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              const term = e.target.value;
              setSearchQuery(term);  
            }
          }}
        />
      </div>
    </div>
  );
}

export default SearchBar;
