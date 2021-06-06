import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ContactForm = (props) => {
  const [contact, setContact] = useState({
    name: props.contact ? props.contact.name : '',
    email: props.contact ? props.contact.email : '',
    phone: props.contact ? props.contact.phone : '',
    date: props.contact ? props.contact.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { name, email, phone } = contact;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [name, email, phone];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const contact = {
        id: uuidv4(),
        name,
        email,
        phone,
        date: new Date()
      };
      props.handleOnSubmit(contact);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'phone':
        if (value === '' || parseInt(value) === +value) {
          setContact((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setContact((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Control
            className="input-control"
            type="text"
            name="name"
            value={name}
            placeholder="Enter full name (i.e. first name and then last name)"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control
            className="input-control"
            type="text"
            name="email"
            value={email}
            placeholder="Enter email address"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Control
            className="input-control"
            type="number"
            name="phone"
            value={phone}
            placeholder="Enter mobile phone number"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;