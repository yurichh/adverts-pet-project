import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../redux/contacts/operations';
import { Box, Button } from '@mui/material';

const ContactItem = ({ contactData }) => {
  const dispatch = useDispatch();

  const { id, name, number } = contactData;

  const handleDelete = () => {
    dispatch(removeContact(id));
  };

  return (
    <li className="contacts-item">
      <p className="contacts-item-name">
        {name} :<span className="contacts-item-number">{number}</span>
      </p>
      <Box
        sx={{
          width: 200,
          maxWidth: '100%',
        }}
      >
        <Button
          variant="outlined"
          fullWidth
          color="error"
          size="small"
          onClick={handleDelete}
        >
          Delete contact
        </Button>
      </Box>
    </li>
  );
};

export default ContactItem;
