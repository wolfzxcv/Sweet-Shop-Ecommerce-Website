import React, { useContext } from 'react';
import HeaderLaptop from './HeaderLaptop';
import HeaderMobile from './HeaderMobile';
import { SharedContext } from '../contexts/SharedContext';

const Header = () => {
  const { isLaptop } = useContext(SharedContext);

  return <>{isLaptop ? <HeaderLaptop /> : <HeaderMobile />}</>;
};

export default Header;
