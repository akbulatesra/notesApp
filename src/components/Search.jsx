import React from 'react';
import { StyledSearch } from './styles/StyledSearch';
import { BiSearchAlt } from 'react-icons/bi';

function Search({ handleSearchNote }) {
  return (
    <StyledSearch>
      <BiSearchAlt id="searchIcon" />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder="Type to Search..."
      />
    </StyledSearch>
  );
}

export default Search;
