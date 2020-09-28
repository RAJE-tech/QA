import React, { useState } from 'react';
import AnswersList from './AnswersList';
import HelpfulBtn from './HelpfulBtn';

function Question({question, key}) {
  return (
    <div>
      <div>{`Q: ${question.question_body}`}</div>
      <HelpfulBtn />
      <AnswersList question={question} key={key} />
    </div>
  );
}

export default Question;
