import React from 'react';

function AnswerImages({ image }) {
  return (
    <div className="row">
      <div className="col" xs={6} md={4}>
        <img src={`${image.url}/171x180`} alt="alt" />
      </div>
    </div>
  );
}

export default AnswerImages;
