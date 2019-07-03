import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const HeaderLaptop = ({ className }) => {
  return (
    <header className={className}>
      <div className='logo'>
        <div className='logo-dark'>
          <img src={require('../svg/logo-dark.svg')} alt='logo' />
        </div>
        <div className='logotype-lg-dark'>
          <img src={require('../svg/logotype-lg-dark.svg')} alt='logo' />
        </div>
      </div>

      <div className='link'>
        <Link to='/'>
          <div>HOME</div>
        </Link>

        <Link to='/product'>
          <div>PRODUCT</div>
        </Link>

        <Link to='/login'>
          <div>LOGIN</div>
        </Link>

        <Link to='/cart'>
          <div>
            <FontAwesomeIcon icon={faShoppingCart} />
          </div>
        </Link>
      </div>
    </header>
  );
};

HeaderLaptop.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledHeaderLaptop = styled(HeaderLaptop)`
  height: 100px;
  padding: 0px 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    .logo-dark {
      margin-right: 8px;
      width: 40px;
      height: 40px;
    }
    .logotype-lg-dark {
      width: 171px;
      height: 26px;
    }
  }

  .link {
    display: flex;
    div {
      width: 100px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: ${props => props.theme.colors.greenWhite};
      }
    }
  }
`;

StyledHeaderLaptop.displayName = 'HeaderLaptop';

export default StyledHeaderLaptop;
