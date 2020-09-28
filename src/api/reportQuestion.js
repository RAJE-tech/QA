import axios from 'axios';

const reportQuestion = (id) => axios.put(`http://52.26.193.201:3000/qa/${id}/report`)
  .then((data) => data)
  .catch((err) => { throw err; });

export default reportQuestion;
