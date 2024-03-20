import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts/selectors.js';
import Filter from './Filter.jsx';
import ContactList from './ContactList';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations.js';

const ContactsWrapper = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log('contacts', contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <section className="contacts-wrapper">
      {(contacts.length === 0 && (
        <h1 style={{ marginTop: 80, fontSize: 44 }}>
          Ooops... No contacts here
        </h1>
      )) || (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </section>
  );
};

export default ContactsWrapper;
