import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectIsLoading,
} from '../redux/contacts/selectors';
import ContactItem from './ContactItem';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const reversedContacts = [...filteredContacts].reverse();
  return isLoading ? (
    <span className="loader2"></span>
  ) : (
    <ul className="contacts-list">
      {reversedContacts.map(contact => (
        <ContactItem key={contact.id} contactData={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
