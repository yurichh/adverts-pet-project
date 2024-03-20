import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../redux/auth/operations';
import { Button } from '@mui/material';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleClick = () => {
    dispatch(logOut());
  };

  return (
    <div className="user-menu-wrapper">
      <p className="user-menu-text">Welcome, {user.name} </p>
      <Button
        variant="outlined"
        color="error"
        size="small"
        onClick={handleClick}
      >
        LOGOUT
      </Button>
    </div>
  );
};

export default UserMenu;
