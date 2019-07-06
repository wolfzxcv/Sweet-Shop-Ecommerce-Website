import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { SharedContext } from '../contexts/SharedContext';

const Dashboard = () => {
  const { user, isLogin, handleLogout } = useContext(SharedContext);

  if (!isLogin) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      <button type='submit' onClick={() => handleLogout(user)}>
        Log out
      </button>
    </div>
  );
};

export default Dashboard;
