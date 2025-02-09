import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QuestionsList from './QuestionsList';
import AddQuestionBtn from './AddQuestionBtn';
import MoreQuestionsBtn from './MoreQuestionsBtn';
import Search from './Search';
import Product from '../api/product';

function App({ base }) {
  const [productName, setProductName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [shownQuestions, setShownQuestions] = useState([]);
  const [count, setCount] = useState(2);
  const [searchActive, setSearchActive] = useState(false);

  let { productId } = useParams();
  if (base === true) {
    productId = 8;
  }

  useEffect(() => {
    Product.getQuestions(productId)
      .then((res) => {
        setQuestions(res.data.results);
        setShownQuestions(res.data.results.slice(0, count));
      })
      .catch((err) => {
        throw err;
      });
  }, [productId, count]);

  useEffect(() => {
    Product.getProduct(productId)
      .then((res) => {
        setProductName(res.data.name);
      })
      .catch((err) => {
        throw err;
      });
  }, [productId]);

  return (
    <div className="container">
      <div className="row jgd-top-space">
        <div className="col">
          <h5>QUESTIONS & ANSWERS</h5>
        </div>
      </div>
      <div className="row-noGutters">
        <Search
          questions={questions}
          count={count}
          setSearchActive={setSearchActive}
          setShownQuestions={setShownQuestions}
        />
      </div>
      <div className="row">
        <div className="col">
          <QuestionsList
            productName={productName}
            shownQuestions={shownQuestions}
          />
        </div>
      </div>
      <div className="row jgd-bottom-space">
        <MoreQuestionsBtn
          count={count}
          searchActive={searchActive}
          questions={questions}
          setCount={setCount}
        />
        <AddQuestionBtn
          productId={productId}
          productName={productName}
          setQuestions={setQuestions}
        />
      </div>
    </div>
  );
}

export default App;
