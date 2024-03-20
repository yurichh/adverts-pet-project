import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/contacts/selectors';
import { addContact } from '../redux/contacts/operations';
import { Box, Button, TextField } from '@mui/material';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [state, setState] = useState({ name: '', number: '' });

  const checkNameForRepeat = contactName => {
    return contacts.some(
      ({ name }) => name.toLowerCase() === contactName.toLowerCase()
    );
  };

  const handleAddContact = obj => {
    if (!state.name || !state.number) {
      Notiflix.Notify.warning(`Something missed`, {
        position: 'center-top',
        distance: '100px',
        fontSize: '40px',
        width: '600px',
      });
      return;
    }
    if (checkNameForRepeat(obj.name)) {
      Notiflix.Notify.warning(`${obj.name} is already in contacts`, {
        position: 'center-top',
        distance: '50px',
        fontSize: '40px',
        width: '600px',
      });
      return;
    }
    dispatch(addContact(obj));
    setState({ name: '', number: '' });
  };
  const createContactObj = e => {
    e.preventDefault();

    const newContactObj = {
      ...state,
      id: nanoid(),
    };

    handleAddContact(newContactObj);
  };
  const handleChange = ({ target: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <form
        action="submit"
        className="add-form"
        autoComplete="on"
        onSubmit={createContactObj}
      >
        <Box
          sx={{
            width: 200,
          }}
        >
          <TextField
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={state.name}
            fullWidth
            name="name"
            label="Name"
            variant="standard"
            onChange={handleChange}
          />

          <TextField
            required
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            value={state.number}
            fullWidth
            name="number"
            type="tel"
            label="Number"
            variant="standard"
            onChange={handleChange}
            style={{ marginBottom: 15 }}
          />
        </Box>
        <Button variant="outlined" color="success" size="small" type="submit">
          Add contact
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
