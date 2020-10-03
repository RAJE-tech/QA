import React, { useState, useEffect } from 'react';

function Search() {
  return (
    <input type="search" className="form-control ds-input jgd-small-bold jgd-sharp-edge jgd-large-padded jgd-solid-border" id="search-input" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." aria-label="Search for..." autoComplete="off" spellCheck="false" role="searchbox" aria-autocomplete="list" aria-owns="algolia-autocomplete-listbox-0" />
  );
}

export default Search;
