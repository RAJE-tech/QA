import React, { useState, useEffect } from 'react';
import Answer from './Answer';
import getProductAnswers from '../api/getProductAnswers';

function AnswersList({ question }) {
  const [answers, setAnswers] = useState([]);
  console.log('this is the question id', question.question_id);
  useEffect(() => {
    getProductAnswers(question.question_id)
      .then((res) => {
        let sellerFirst = [];
        let filtered = res.data.results.filter((answer) => answer.answerer_name === 'Seller');
        if (filtered.length > 0) {
          filtered.map((answer) => sellerFirst.push(answer));
          for (let i = 0; i < res.data.results.length; i += 1) {
            if (res.data.results[i].answerer_name !== 'Seller') {
              sellerFirst.push(res.data.results[i]);
            }
          }
          console.log('Seller sorted list:', sellerFirst);
          setAnswers(sellerFirst);
        } else {
          console.log('Result answer data from Greenfield:', res.data.results);
          setAnswers(res.data.results);
        }
      })
      .catch((err) => {
        throw err;
      });
  }, [question.question_id]);

  return (
    <div>
      {answers.map((answer) => <Answer answer={answer} key={answer.answer_id} />)}
    </div>
  );
}

export default AnswersList;
