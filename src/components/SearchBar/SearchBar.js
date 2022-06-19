import React from 'react';
import { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count',
  };

  const getSortByClass = (sortByOption) => {
    if (sortByOption === sortBy) {
      return 'active';
    } else {
      return '';
    }
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = (e) => {
    props.searchYelp(term, location, sortBy);
    e.preventDefault();
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionsValue = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionsValue)}
          onClick={() => handleSortByChange(sortByOptionsValue)}
          key={sortByOptionsValue}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input
          onChange={(e) => handleTermChange(e)}
          placeholder="Search Businesses"
        />
        <input onChange={(e) => handleLocationChange(e)} placeholder="Where?" />
      </div>
      <div onClick={(e) => handleSearch(e)} className="SearchBar-submit">
        <button>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;
