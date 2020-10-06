const express = require('express');

const app = express();

app.use(express.static('dist'));

app.listen(3003, () => {
  console.log('Questions & Answers is listening on port 3003');
});
