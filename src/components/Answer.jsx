import React, { useState } from 'react';
import AnswerHelpfulBtn from './AnswerHelpfulBtn';
import ReportAnswerBtn from './ReportAnswerBtn';

function Answer({ answer }) {
  let seller;
  if (answer.answerer_name === 'Seller') {
    seller = <b>{answer.answerer_name}</b>;
  } else {
    seller = answer.answerer_name;
  }

  return (
    <span>
      <span>{answer.body}</span>
      <span>{seller}</span>
      <span>{answer.date}</span>
      <AnswerHelpfulBtn answer={answer} />
      <ReportAnswerBtn answer={answer} />
    </span>
  );
}

export default Answer;
