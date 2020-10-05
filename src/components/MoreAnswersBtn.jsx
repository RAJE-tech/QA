import React, { useState } from 'react';

function MoreAnswersBtn({ answers, shownAnswers, setShownAnswers }) {
  function showMoreAnswers() {
    setShownAnswers(answers);
  }

  function showLessAnswers() {
    setShownAnswers(answers.slice(0, 2));
  }
  return (
    <div
      onClick={shownAnswers.length < answers.length ? showMoreAnswers : showLessAnswers}
      className="jgd-pointer hover-underline jgd-small-text jgd-less-bottom-space jgd-set-width"
    >
      <b>{shownAnswers.length < answers.length ? 'LOAD MORE ANSWERS' : 'COLLAPSE ANSWERS' }</b>
    </div>
  );
}

export default MoreAnswersBtn;
