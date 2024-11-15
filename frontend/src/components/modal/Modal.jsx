import React from 'react';
import './Modal.css';

const Modal = ({ setIsOpen, searchQuery, searchResults }) => {
  return (
    <div className="modal-background">
      <div className="modal-content">
        <button className="close-button" onClick={() => setIsOpen(false)}>
          &times;
        </button>
        <h2>Search Results for "{searchQuery}"</h2>
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;