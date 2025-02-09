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
    <div className="jgd-small-text jgd-grey">
      <span>Helpful? </span>
      <span
        onKeyDown={null}
        onClick={!isHelpful ? markHelpful : null}
        className={!isHelpful ? 'jgd-pointer' : 'jgd-pointer jgd-helpful'}
      >
        <u>Yes</u>
        {` (${helpfulness})`}
      </span>
    </div>
  );
}

export default QuestionHelpfulBtn;
