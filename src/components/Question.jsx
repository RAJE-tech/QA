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
            <p className="jgd-bold">Q:</p>
          </div>
          <div className="col">
            <div className="jgd-bold">{question.question_body}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-0.5">
            <p className="jgd-bold">A:</p>
          </div>
          <div className="col">
            <AnswersList question={question} />
          </div>
        </div>
      </div>
      <div className="col" style={{ textAlign: 'right' }}>
        <QuestionHelpfulBtn question={question} />
        <AddAnswerBtn questionId={question.question_id} />
      </div>
    </div>
  );
}

export default Question;
