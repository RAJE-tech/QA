import React, { useState } from 'react';
import AnswersList from './AnswersList';
import HelpfulBtn from './HelpfulBtn';
import AddAnswerBtn from './AddAnswerBtn';

function Question({ question }) {
  return (
    <div>
      <span className="jgd-bold">Q: </span>
      <span className="jgd-bold">{question.question_body}</span>
      <HelpfulBtn question={question} />
      <AddAnswerBtn questionId={question.question_id} />
      <AnswersList question={question} />
    </div>
  );
}

export default Question;
