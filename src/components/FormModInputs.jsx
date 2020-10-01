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
      <Form onSubmit={submitForm}>

        <Form.Group controlId="body">
          <Form.Label>Your Answer</Form.Label>
          <Form.Control as="textarea" rows="3" name="body" value={state.body} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>What is your nickname?</Form.Label>
          <Form.Text className="jgd-faded">
            For privacy reasons, do not use your full name or email address
          </Form.Text>
          <Form.Control as="textarea" rows="1" name="name" placeholder="Example: jack543!" value={state.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Text className="jgd-faded">
            For authentication reasons, you will not be emailed
          </Form.Text>
          <Form.Control type="email" placeholder="Example: jack@email.com" name="email" value={state.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group>
          <Form.File
            id="Reviewfile added"
            label="Upload photo"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormModInputs;
