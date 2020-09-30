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
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <div>{answer.body}</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              <span className="jgd-small-text">{seller}</span>
              <span className="jgd-small-text">{answer.date}</span>
              <AnswerHelpfulBtn answer={answer} />
              <ReportAnswerBtn answer={answer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
