const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, './dist') });
});

app.listen(3004, () => {
  console.log('Questions & Answers is listening on port 3003');
});
