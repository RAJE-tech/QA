import React from 'react';
import AnswerHelpfulBtn from './AnswerHelpfulBtn';
import ReportAnswerBtn from './ReportAnswerBtn';
import AnswerImages from './AnswerImages';

const convertDate = (date) => {
  // example input: 2020-08-02T00:00:00.000Z
  const months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };
  const timeless = date.split('T');
  // example timeless: [ '2020-08-02', '00:00:00.000Z' ]
  const dashless = timeless[0].split('-');
  // example dashless: [ '2020', '08', '02' ]
  const result = `${months[dashless[1]]} ${dashless[2][0] === '0' ? dashless[2][1] : dashless[2]}, ${dashless[0]}`;
  // example result: August 2, 2020
  return result;
};

function Answer({ answer }) {
  return (
    <div className="row">
      <div className="col jgd-less-bottom-space">
        <p>{answer.body}</p>
        <div className={`row ${answer.photos.length > 0 ? 'jgd-even-less-bottom-space' : null}`}>
          {answer.photos.length > 0 ? answer.photos.map((image) => <AnswerImages image={image} key={image.id} />) : null}
        </div>
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
    </div>
  );
}

export default Answer;
