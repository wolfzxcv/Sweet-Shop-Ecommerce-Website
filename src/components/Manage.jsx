import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { SharedContext } from '../contexts/SharedContext';

const Manage = () => {
  const { user, isLogin, setIsLogin } = useContext(SharedContext);

  if (!isLogin) {
    return <Redirect to='/manage' />;
  }

  const handleLogout = user => {
    axios
      .post(`${process.env.REACT_APP_API}/logout`, user)
      .then(setIsLogin(false))
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <button type='submit' onClick={() => handleLogout(user)}>
        Log out
      </button>
    </div>
  );
};

export default Manage;
