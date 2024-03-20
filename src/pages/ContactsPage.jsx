import ContactForm from 'components/ContactForm';
import React from 'react';
import ContactsWrapper from 'components/ContactsWrapper';
import { useSelector } from 'react-redux';
import { selectError } from '../redux/contacts/selectors';
import ErrorComponent from 'components/ErrorComponent';

const ContactsPage = () => {
  const error = useSelector(selectError);
  return error ? (
    <ErrorComponent error={error} />
  ) : (
    <>
      <ContactForm />
      <ContactsWrapper />
    </>
  );
};

export default ContactsPage;
