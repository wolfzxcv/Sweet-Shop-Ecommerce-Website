import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTimes,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import HeaderMobileOverlay from './HeaderMobileOverlay';
import logoSmallDark from '../svg/logotype-sm-dark.svg';

const HeaderMobile = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuClose = () => setMenuOpen(false);

  return (
    <header className={className}>
      <div
        className='menuToggle'
        onClick={() => setMenuOpen(!menuOpen)}
        onKeyDown={e => {
          if (e.keyCode === 27) setMenuOpen(!menuOpen);
        }}
        role='button'
        tabIndex='0'
      >
        {menuOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      {menuOpen && <HeaderMobileOverlay menuClose={menuClose} />}

      <div
        onClick={() => setMenuOpen(false)}
        onKeyDown={() => setMenuOpen(false)}
        role='button'
        tabIndex='0'
      >
        <Link to='/Sweet-for-happiness/#/'>
          <img src={logoSmallDark} alt='logo' />
        </Link>
      </div>

      <div
        onClick={() => setMenuOpen(false)}
        onKeyDown={() => setMenuOpen(false)}
        role='button'
        tabIndex='0'
      >
        <Link to='/Sweet-for-happiness/#/cart'>
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
      </div>
    </header>
  );
};

HeaderMobile.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledHeaderMobile = styled(HeaderMobile)`
  height: 100px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  .menuToggle {
    width: 30px;
    height: 30px;
    &:hover {
      cursor: pointer;
    }
  }
  img {
    width: 114px;
    height: 18px;
  }
`;

StyledHeaderMobile.displayName = 'HeaderMobile';

export default StyledHeaderMobile;
