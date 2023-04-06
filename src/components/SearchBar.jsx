import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../../src/styles/style.css";

const SearchBar = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    // handle the search action
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <select value={selectedOption1} onChange={handleOption1Change}>
          <option value="">Sélectionner catégorie</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <select value={selectedOption2} onChange={handleOption2Change}>
          <option value="">Sélectionner formation</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <input type="text" value={searchText} onChange={handleSearchTextChange} placeholder='Mots clés'/>
        <button onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;




