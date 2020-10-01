import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const FormModInputs = ({ onHide, question }) => {
  const [state, setState] = useState({
    body: '',
    name: '',
    email: '',
    photos: [],
  });

  function submitForm(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: `http://52.26.193.201:3000/qa/${question.question_id}/answers`,
      data: {
        body: state.body,
        name: state.name,
        email: state.email,
        photos: state.photos,
      },
    })
      .then(() => {
        onHide();
      })
      .catch((error) => {
        throw error;
      });
  }

  function handleChange(event) {
    const { value } = event.target;
    setState({
      ...state,
      [event.target.name]: value,
    });
  }

  return (

    <div>
    </div>
  );
};

export default FormModInputs;
