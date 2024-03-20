import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../redux/filter/filterSlice';
import { Box, TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(changeFilter(value));
  };
  return (
    <>
      <h2 className="title">Contacts</h2>
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField
          fullWidth
          label="Find contacts by name"
          variant="standard"
          onChange={handleFilter}
        />
      </Box>
    </>
  );
};

export default Filter;
