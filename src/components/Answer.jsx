import React, { useState } from 'react';
import AnswerHelpfulBtn from './AnswerHelpfulBtn';
import ReportAnswerBtn from './ReportAnswerBtn';
import convertDate from './dateConverter';
import AnswerImages from './AnswerImages';

function Answer({ answer }) {
  return (
    <div className="row">
      <div className="col">
        <div className="row">
          <div className="col">
            <p>{answer.body}</p>
            <div className="row">
              {answer.photos.length > 0 ? answer.photos.map((image) => <AnswerImages image={image} key={image.id} />) : null}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              <span className="jgd-small-text jgd-faded">
                {'by '}
              </span>
              <span className={answer.answerer_name === 'Seller' ? 'jgd-small-text jgd-small-bold' : 'jgd-small-text jgd-faded'}>
                {answer.answerer_name}
              </span>
              <span className="jgd-small-text jgd-faded">
                {`, ${convertDate(answer.date)}`}
              </span>
              <span className="jgd-divider jgd-faded">|</span>
              <AnswerHelpfulBtn answer={answer} />
              <span className="jgd-divider jgd-faded">|</span>
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
