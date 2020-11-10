import React, { useState } from 'react';
import Answer from '../api/answer';

function AnswerHelpfulBtn({ answer }) {
  const [isHelpful, setIsHelpful] = useState(false);
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);

  function markAsHelpful(event) {
    event.preventDefault();
    setIsHelpful(!isHelpful);
    Answer.markAsHelpful(answer.answer_id)
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
        onClick={!isHelpful ? markAsHelpful : null}
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

export default AnswerHelpfulBtn;
