import React, { useState } from 'react';
import Answer from './Answer';

function AnswersList({ shownAnswers }) {
  return (
    <div>
      {shownAnswers.map((answer) => <Answer answer={answer} key={answer.answer_id} />)}
    </div>
  );
}

export default AnswersList;
