import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

const Contact = ({
  id,
  name,
  email,
  phone,
  address,
  date,
  handleRemoveContact,
}) => {
    const history = useHistory();
  return (
    <Card style={{ width: "18rem" }} className="contact">
      <Card.Body>
        <Card.Title className="contact-title">Full name: {name}</Card.Title>
        <div className="contact-details">
          <div>E-mail: {email}</div>
          <div>Mobile number: {phone} </div>
          <div>Date created: {new Date(date).toDateString()}</div>
        </div>

        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{" "}
        <Button variant="danger" onClick={() => handleRemoveContact(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Contact;
