import React, { useState } from 'react';
import markQuestionAsHelpful from '../api/markQuestionAsHelpful';

function QuestionHelpfulBtn({ question }) {
  const [isHelpful, setIsHelpful] = useState(false);
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness);

  function markAsHelpful(event) {
    event.preventDefault();
    setIsHelpful(!isHelpful);
    markQuestionAsHelpful(question.question_id)
      .then((res) => {
        setHelpfulness(helpfulness + 1);
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  }

  return (
    <span>
      <span>Helpful? </span>
      <span className="jgd-pointer" onKeyDown={null} onClick={!isHelpful ? markAsHelpful : null}><u>Yes</u></span>
      <span>{` (${helpfulness}) `}</span>
    </span>
  );
}

export default QuestionHelpfulBtn;
