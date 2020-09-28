import React, { useState } from 'react';
import AnswersList from './AnswersList';
import HelpfulBtn from './HelpfulBtn';

function Question({question}) {
  return (
    <div>
      <div>Q: {question.question_body}</div>
      <HelpfulBtn />
      <AnswersList />
    </div>
  );
}

export default Question;
