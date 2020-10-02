import React, { useState, useEffect } from 'react';
import AnswersList from './AnswersList';
import QuestionHelpfulBtn from './QuestionHelpfulBtn';
import AddAnswerBtn from './AddAnswerBtn';
import getProductAnswers from '../api/getProductAnswers';

function Question({ question, productName }) {
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
          console.log('result answer data from Greenfield:', res.data.results);
          setAnswers(res.data.results);
        }
      })
      .catch((err) => {
        throw err;
      });
  }, [question.question_id]);

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
            <AnswersList answers={answers} />
          </div>
        </div>
      </div>
      <div className="col" style={{ textAlign: 'right' }}>
        <QuestionHelpfulBtn question={question} />
        <span className="jgd-divider jgd-faded">|</span>
        <AddAnswerBtn
          question={question}
          productName={productName}
          answers={answers}
          setAnswers={setAnswers}
        />
      </div>
    </div>
  );
}

export default Question;
