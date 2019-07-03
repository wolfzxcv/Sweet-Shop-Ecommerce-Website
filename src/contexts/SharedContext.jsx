import React, { useState, createContext } from 'react';

export const SharedContext = createContext();

export default props => {
  const [user, setUser] = useState('');
  const [input, setInput] = useState({ email: '', password: '' });

  const value = {
    user,
    setUser,
    input,
    setInput,
  };

  return <SharedContext.Provider value={value} {...props} />;
};
