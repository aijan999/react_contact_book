import React, { useContext } from 'react';
import ContactForm from './ContactForm';
import ContactContext from '../context/ContactContext';

const AddContact = ({ history }) => {
  const { contacts, setContacts } = useContext(ContactContext);

  const handleOnSubmit = (contact) => {
    setContacts([contact, ...contacts]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <ContactForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddContact;