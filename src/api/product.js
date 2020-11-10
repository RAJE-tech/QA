import axios from 'axios';

const Product = {
  getQuestions: (id) => axios.get(`http://52.26.193.201:3000/qa/${id}?count=50`)
    .then((data) => data)
    .catch((err) => { throw err; });
};

export default Product;
