import React, { useState } from 'react';
import AnswersList from './AnswersList';
import QuestionHelpfulBtn from './QuestionHelpfulBtn';
import AddAnswerBtn from './AddAnswerBtn';

function Question({ question }) {
  return (
    <div className="row">
      <div className="col-8">
        <span className="jgd-bold">Q: </span>
        <span className="jgd-bold">{question.question_body}</span>
        <AnswersList question={question} />
      </div>
      <div className="col" style={{ 'text-align': 'right' }}>
        <QuestionHelpfulBtn question={question} />
        <AddAnswerBtn questionId={question.question_id} />
      </div>
    </div>
  );
}

export default Question;
