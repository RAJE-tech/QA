import React, { useState } from 'react';
import AnswersList from './AnswersList';
import QuestionHelpfulBtn from './QuestionHelpfulBtn';
import AddAnswerBtn from './AddAnswerBtn';

function Question({ question }) {
  return (
    <div className="row">
      <div className="col-8">
        <div className="row">
          <div className="col-0.5">
            <p className="jgd-large-bold">Q:</p>
          </div>
          <div className="col">
            <div className="jgd-large-bold">{question.question_body}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-0.5">
            <p className="jgd-large-bold">A:</p>
          </div>
          <div className="col">
            <AnswersList question={question} />
          </div>
        </div>
      </div>
      <div className="col" style={{ textAlign: 'right' }}>
        <QuestionHelpfulBtn question={question} />
        <span className="jgd-divider jgd-faded">|</span>
        <AddAnswerBtn questionId={question.question_id} />
      </div>
    </div>
  );
}

export default Question;
