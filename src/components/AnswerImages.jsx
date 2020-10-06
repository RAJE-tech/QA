import React from 'react';

function AnswerImages({ image }) {
  return (
    <div className="col-2">
      <img src={`${image.url}/171x180`} alt="alt" />
    </div>
  );
}

export default AnswerImages;
