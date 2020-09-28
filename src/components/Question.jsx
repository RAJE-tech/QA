import React, { useState } from 'react';
import AnswersList from './AnswersList';
import HelpfulBtn from './HelpfulBtn';
import AddAnswerBtn from './AddAnswerBtn';

function Question({ question }) {
  return (
    <div>
      <div>{`Q: ${question.question_body}`}</div>
      <HelpfulBtn question={question} />
      <AddAnswerBtn questionId={question.question_id} />
      <AnswersList question={question} />
    </div>
  );
}

export default Question;
