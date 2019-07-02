import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const HeaderMobileOverlay = ({ className, menuClose }) => {
  return (
    <header className={className}>
      <div
        className='whole-page'
        onClick={menuClose}
        onKeyDown={menuClose}
        role='presentation'
      >
        <div className='link'>
          <div>
            <Link to='/'>HOME</Link>
          </div>
          <div>
            <Link to='/product'>PRODUCT</Link>
          </div>
          <div>
            <Link to='/login'>LOGIN</Link>
          </div>
          <div>
            <Link to='/cart'>
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

HeaderMobileOverlay.propTypes = {
  className: PropTypes.string.isRequired,
  menuClose: PropTypes.string.isRequired,
};

const StyledHeaderMobileOverlay = styled(HeaderMobileOverlay)`
  position: fixed;
  top: 100px;
  left: 0;
  z-index: 200;
  background-color: #fff;

  .whole-page {
    width: 100vw;
    height: 100vh;
  }
  .link {
    line-height: 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

StyledHeaderMobileOverlay.displayName = 'HeaderMobileOverlay';

export default StyledHeaderMobileOverlay;
