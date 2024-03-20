import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const HomepageWithUser = () => {
  return (
    <div className="">
      <Button type="submit" variant="outlined" size="medium">
        <NavLink to="/contacts">Go to your contacts</NavLink>
      </Button>
    </div>
  );
};

export default HomepageWithUser;
