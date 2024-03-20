import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';

const Layout = () => {
  return (
    <div>
      <AppBar />
      <hr style={{ marginBottom: 40 }} />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
