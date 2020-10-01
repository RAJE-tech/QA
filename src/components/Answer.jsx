import React, { useState } from 'react';
import AnswerHelpfulBtn from './AnswerHelpfulBtn';
import ReportAnswerBtn from './ReportAnswerBtn';
import convertDate from './dateConverter';

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
            <p>{answer.body}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              <span className="jgd-small-text">
                {'by '}
                {seller}
                {`, ${convertDate(answer.date)}`}
              </span>
              <span className="jgd-divider">|</span>
              <AnswerHelpfulBtn answer={answer} />
              <span className="jgd-divider">|</span>
              <ReportAnswerBtn answer={answer} />
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Answer;
