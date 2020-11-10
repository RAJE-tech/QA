import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import getQuestions from '../api/product';

const QuestionFormModInputs = ({ onHide, productId, setQuestions }) => {
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({
    body: '',
    name: '',
    email: '',
  });

  function submitForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    axios({
      method: 'post',
      url: `http://52.26.193.201:3000/qa/${productId}`,
      data: {
        body: state.body,
        name: state.name,
        email: state.email,
      },
    })
      .then(() => {
        onHide();
        getQuestions(productId)
          .then((res) => {
            setQuestions(res.data.results);
          })
          .catch((err) => {
            throw err;
          });
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
      <Form noValidate validated={validated} onSubmit={submitForm}>

        <Form.Group controlId="body">
          <Form.Label>Your Question*</Form.Label>
          <Form.Control required as="textarea" rows="3" name="body" value={state.body} maxlength="1000" onChange={handleChange} />
          <Form.Control.Feedback type="invalid">
            Please provide a question.
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>What is your nickname?*</Form.Label>
          <Form.Text className="jgd-faded">
            For privacy reasons, do not use your full name or email address
          </Form.Text>
          <Form.Control required as="textarea" rows="1" name="name" maxlength="60" placeholder="Example: jackson11!" value={state.name} onChange={handleChange} />
          <Form.Control.Feedback type="invalid">
            Please choose a nickname.
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address*</Form.Label>
          <Form.Text className="jgd-faded">
            For authentication reasons, you will not be emailed
          </Form.Text>
          <Form.Control required type="email" placeholder="Example: jackson@email.com" maxlength="60" name="email" value={state.email} onChange={handleChange} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" size="lg" className="float-right">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default QuestionFormModInputs;
