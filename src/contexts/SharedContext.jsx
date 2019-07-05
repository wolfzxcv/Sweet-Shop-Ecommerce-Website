import React, { useState, createContext } from 'react';

export const SharedContext = createContext();

export default props => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [isLogin, setIsLogin] = useState(false);

  const value = {
    user,
    setUser,
    isLogin,
    setIsLogin,
  };

  return <SharedContext.Provider value={value} {...props} />;
};
