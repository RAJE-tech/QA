import React, { useState } from 'react';
import AnswersList from './AnswersList';
import HelpfulBtn from './HelpfulBtn';
import AddAnswerBtn from './AddAnswerBtn';

function Question({question, key}) {
  return (
    <div>
      <div>{`Q: ${question.question_body}`}</div>
      <HelpfulBtn question={question} />
      <AddAnswerBtn key={key} />
      <AnswersList question={question} key={key} />
    </div>
  );
}

export default Question;
