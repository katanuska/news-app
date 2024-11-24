import React, { useState } from 'react';
import './SearchBar.scss';

type SearchBarProps = {
  onSearch: (query: string) => void;
};
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  return (
    <div className="search-bar">
      <div className="logo">LOGO</div>
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search news..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={() => onSearch(searchQuery)}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
