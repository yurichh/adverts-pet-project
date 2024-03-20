import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <>
      <NavLink to="/login" className="nav-item">
        LOGIN
      </NavLink>
      <NavLink to="/register" className="nav-item">
        REGISTER
      </NavLink>
    </>
  );
};

export default AuthNav;
