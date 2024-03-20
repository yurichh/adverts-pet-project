import React from 'react';
import Navigation from './Navigation';
import { useAuth } from 'hooks/useAuth';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="header">
      <ul className="header-nav-list">
        <li className="header-nav-list-item">
          {' '}
          <Navigation />
        </li>
        <li className="header-nav-list-item">
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </li>
      </ul>
    </header>
  );
};

export default AppBar;
