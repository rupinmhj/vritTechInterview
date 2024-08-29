import React, { useState } from 'react';
import './SearchFilter.css';

function SearchFilter({ items }) {
  const [search, setSearch] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-blue"
        />
        <i className="fas fa-search search-icon"></i>
      </div>
      {search && (
        <ul className="space-y-3 front">
          {filteredItems.map((item, index) => (
            <li key={index} className="">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchFilter;
