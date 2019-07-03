import React, { useState, createContext } from 'react';

export const SharedContext = createContext();

export default props => {
  const [user, setUser] = useState({ email: '', password: '' });

  const value = {
    user,
    setUser,
  };

  return <SharedContext.Provider value={value} {...props} />;
};
