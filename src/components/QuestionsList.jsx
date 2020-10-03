import React, { useState, useEffect } from 'react';
import Question from './Question';
import getProductQuestions from '../api/getProductQuestions';
import getProductInfo from '../api/getProductInfo';

function QuestionsList() {
  const [productId, setProductId] = useState(3);
  const [questions, setQuestions] = useState([]);
  const [productName, setProductName] = useState('');

  useEffect(() => {
    getProductQuestions(productId)
      .then((res) => {
        console.log('result data from Greenfield:', res.data.results);
        setQuestions(res.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }, [productId]);

  useEffect(() => {
    getProductInfo(productId)
      .then((res) => {
        console.log('this is the product name: ', res.data.name);
        setProductName(res.data.name);
      })
      .catch((err) => {
        throw err;
      });
  }, [productId]);

  return (
    <div>
      {questions.map((question) => <Question question={question} key={question.question_id} productName={productName}/>)}
    </div>
  );
}

export default QuestionsList;
