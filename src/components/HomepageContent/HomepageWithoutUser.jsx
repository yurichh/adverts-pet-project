import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const HomepageWithoutUser = () => {
  return (
    <div style={{ width: 500, margin: '0 auto' }}>
      <p style={{ marginBottom: 20 }}>
        In this application, you can save and find your friends and
        acquaintances very easily. But first you need to log in to your account
      </p>
      <Button variant="outlined" size="medium">
        <NavLink to="/login">Log in</NavLink>
      </Button>
      <p style={{ marginBottom: 20, marginTop: 20 }}>
        But if you don't have one - let's create a new account
      </p>
      <Button variant="outlined" size="medium">
        <NavLink to="/register">Create a new account</NavLink>
      </Button>
    </div>
  );
};

export default HomepageWithoutUser;
