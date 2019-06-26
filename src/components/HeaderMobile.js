import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import HeaderMobileOverlay from './HeaderMobileOverlay'

const HeaderMobile = ({ className }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuClose = () => setMenuOpen(false)

  return (
    <header className={className}>
      <div onClick={() => setMenuOpen(!menuOpen)}><FontAwesomeIcon icon={faBars} /></div>
      {menuOpen && <HeaderMobileOverlay menuClose={menuClose} />}

      <div onClick={() => setMenuOpen(false)}>
        <Link to='/'>
          <img src={require('../svg/logotype-sm-dark.svg')} alt="logo" />
        </Link>
      </div>

      <div onClick={() => setMenuOpen(false)}>
        <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} /></Link></div>
    </header>
  )
}

HeaderMobile.propTypes = {
  className: PropTypes.string,
};

const StyledHeaderMobile = styled(HeaderMobile)`
height: 100px;
padding: 0 30px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 24px;
img{
  width: 114px;
  height: 18px;
}

`;

StyledHeaderMobile.displayName = 'HeaderMobile';

export default StyledHeaderMobile;
