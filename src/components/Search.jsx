import React, { useState, useEffect } from 'react';

function Search({ questions, setShownQuestions, count, setSearchActive }) {
  const [state, setState] = useState({
    searchInput: '',
  });

  useEffect(() => {
    if (state.searchInput.length > 2) {
      const filteredQuestions = questions.filter(question => question.question_body.toLowerCase().includes(state.searchInput.toLowerCase()));
      setShownQuestions(filteredQuestions);
      setSearchActive(true);
    } else {
      setShownQuestions(questions.slice(0, count));
      setSearchActive(false);
    }
  }, [state.searchInput, questions, setShownQuestions, count]);

  function handleChange(event) {
    const { value } = event.target;
    setState({
      ...state,
      searchInput: value,
    });
  }

  return (
    <div className="row jgd-solid-border jgd-sharp-edge no-gutters jgd-component-space">
      <div className="col-11">
        <input type="search" className="form-control ds-input jgd-small-bold jgd-large-padded jgd-no-border jgd-larger-text" id="search-input" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." aria-label="Search for..." autoComplete="off" spellCheck="false" role="searchbox" aria-autocomplete="list" aria-owns="algolia-autocomplete-listbox-0" onChange={handleChange} />
      </div>
      <div className="col">
        <div className="jgd-magnifying-glass">
          <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Search;
