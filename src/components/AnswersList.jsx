import React, { useState } from 'react';
import Answer from './Answer';

function AnswersList({ answers }) {
  return (
    <div>
      {answers.map((answer) => <Answer answer={answer} key={answer.answer_id} />)}
    </div>
  );
}

export default AnswersList;
