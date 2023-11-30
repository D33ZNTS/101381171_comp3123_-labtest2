import React, { useState } from 'react';

const SearchBar = ({ setCity }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    setCity(input);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
