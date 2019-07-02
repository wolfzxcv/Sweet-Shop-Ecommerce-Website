import React from 'react';
import { useMedia } from 'use-media';
import HeaderLaptop from './HeaderLaptop';
import HeaderMobile from './HeaderMobile';

const Header = () => {
  const isLaptop = useMedia({ minWidth: 769 });

  return <>{isLaptop ? <HeaderLaptop /> : <HeaderMobile />}</>;
};

export default Header;
