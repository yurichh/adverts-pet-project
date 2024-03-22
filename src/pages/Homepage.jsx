import React from 'react';
import { NavLink } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="">
      <NavLink to="/catalog">Go to adverts</NavLink>
    </div>
  );
};

export default Homepage;
