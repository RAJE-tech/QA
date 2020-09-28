import React, { useState } from 'react';
import HelpfulBtn from './HelpfulBtn';

function Answer({ answer }) {
  return (
    <div>
      <div>{answer.body}</div>
      <span>{`${answer.answerer_name}, ${answer.date} | `}</span>
      <HelpfulBtn answer={answer} />
    </div>
  );
}

export default Answer;
