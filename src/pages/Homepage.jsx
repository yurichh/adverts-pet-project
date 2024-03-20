import HomepageWithUser from 'components/HomepageContent/HomepageWithUser';
import HomepageWithoutUser from 'components/HomepageContent/HomepageWithoutUser';
import { useAuth } from 'hooks/useAuth';
import React from 'react';

const Homepage = () => {
  const { user } = useAuth();
  return (
    <div className="homepage-wrapper">
      <h2 className="homepage-title">Welcome to the Phonebook App</h2>
      <p style={{ marginBottom: 10, fontSize: 30 }}>
        Hello {user.name ?? null}!
      </p>
      <p style={{ marginBottom: 40, fontSize: 30 }}>
        This is your personalized phone book content
      </p>

      {user.name ? <HomepageWithUser /> : <HomepageWithoutUser />}
    </div>
  );
};

export default Homepage;
