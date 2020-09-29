import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import getProductAnswers from '../api/getProductAnswers';

function AnswersList({ question }) {
  const [answers, setAnswers] = useState([]);
  console.log('this is the question id', question.question_id);
  useEffect(() => {
    getProductAnswers(question.question_id)
      .then((res) => {
        console.log('result answer data from Greenfield:', res.data.results);
        setAnswers(res.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }, [question.question_id]);

  return (
    <div>
      <span>
        <b>A: </b>
      </span>
      {answers.map((answer) => <Answer answer={answer} key={answer.answer_id} />)}
    </div>
  );
}

export default AnswersList;
