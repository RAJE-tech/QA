import React, { useState } from 'react';
import report from '../api/answer';

function ReportAnswerBtn({ answer }) {
  const [isReported, setIsReported] = useState(false);

  function markAsReported(event) {
    event.preventDefault();
    report(answer.answer_id)
      .then((res) => {
        setIsReported(!isReported);
        console.log(res);
      })
      .catch((err) => {
        throw err;
      });
  }

  return (
    <span className="jgd-small-text jgd-faded">
      <span
        onKeyDown={null}
        onClick={!isReported ? markAsReported : null}
        className={!isReported ? 'jgd-pointer' : 'jgd-pointer jgd-reported'}
      >
        <u>{!isReported ? 'Report' : 'Reported'}</u>
      </span>
    </span>
  );
}

export default ReportAnswerBtn;
