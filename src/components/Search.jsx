import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

function Search({
  questions,
  setShownQuestions,
  count,
  setSearchActive
}) {
  const [state, setState] = useState({
    searchInput: '',
  });

  useEffect(() => {
    if (state.searchInput.length > 2) {
      const filteredQuestions = questions.filter((question) => question.question_body.toLowerCase().includes(state.searchInput.toLowerCase()));
      setShownQuestions(filteredQuestions);
      setSearchActive(true);
    } else {
      setShownQuestions(questions.slice(0, count));
      setSearchActive(false);
    }
  }, [state.searchInput, questions, setShownQuestions, count, setSearchActive]);

  function handleChange(event) {
    const { value } = event.target;
    setState({
      ...state,
      searchInput: value,
    });
  }

  return (
    <form noValidate autoComplete="off" className="jgd-component-space">
      <TextField id="outlined-search" label="SEARCH QUESTIONS" type="search" variant="outlined" className="jgd-small-bold jgd-larger-text jgd-width-100 jgd-large-padded" onChange={handleChange} />
    </form>
  );
}

export default Search;
