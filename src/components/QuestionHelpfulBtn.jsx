import React, { useState } from 'react';
import markAsHelpful from '../api/question';

function QuestionHelpfulBtn({ question }) {
  const [isHelpful, setIsHelpful] = useState(false);
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);

  function markHelpful(event) {
    event.preventDefault();
    setIsHelpful(!isHelpful);
    markAsHelpful(question.question_id)
      .then((res) => {
        setHelpfulness(helpfulness + 1);
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  }

  return (
    <span className="jgd-small-text jgd-grey">
      <span>Helpful? </span>
      <span
        onKeyDown={null}
        onClick={!isHelpful ? markHelpful : null}
        className={!isHelpful ? 'jgd-pointer' : 'jgd-pointer jgd-helpful'}
      >
        <u>Yes</u>
      </span>
      <span
        className={!isHelpful ? null : 'jgd-helpful'}
      >
        {` (${helpfulness})`}
      </span>
    </span>
  );
}

export default QuestionHelpfulBtn;
