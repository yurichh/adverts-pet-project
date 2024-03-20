import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import { NavLink } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ target }) => {
    const userData = {
      name: target[0].value,
      email: target[1].value,
      password: target[2].value,
    };
    dispatch(register(userData));
  };
  return (
    <div className="register-wrapper">
      <h2>REGISTER FORM</h2>
      <form
        className="form"
        onSubmit={e => {
          e.preventDefault();

          handleSubmit(e);
        }}
      >
        <TextField label="Name" fullWidth variant="standard" />
        <TextField type="email" fullWidth label="Email" variant="standard" />
        <TextField
          fullWidth
          id="filled-password-input"
          label="Password"
          type="password"
          variant="standard"
        />

        <Button type="submit" variant="outlined" size="medium">
          Sign in
        </Button>
      </form>
      <p className="redirect-text">
        Already have an account?
        <NavLink to="/login" className="redirect-link">
          {' '}
          Log in
        </NavLink>
      </p>
    </div>
  );
};

export default RegisterPage;
