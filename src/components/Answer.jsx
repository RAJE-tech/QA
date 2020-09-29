import React, { useState } from 'react';
import HelpfulBtn from './HelpfulBtn';

function Answer({ answer }) {
  let seller;
  if (answer.answerer_name === 'Seller') {
    seller = <b>{answer.answerer_name}</b>;
  } else {
    seller = answer.answerer_name;
  }
  return (
    <div>
      <div>{answer.body}</div>
      <span>{seller}</span>
      <span>{answer.date}</span>
      <HelpfulBtn answer={answer} />
    </div>
  );
}

export default Answer;
