import axios from 'axios';

const Product = {
  getQuestions: (id) => axios.get(`http://52.26.193.201:3000/qa/${id}?count=50`)
    .then((data) => data)
    .catch((err) => { throw err; }),
  getProduct: (id) => axios.get(`http://52.26.193.201:3000/products/${id}`)
    .then((data) => data)
    .catch((err) => { throw err; }),
};

export default Product;
