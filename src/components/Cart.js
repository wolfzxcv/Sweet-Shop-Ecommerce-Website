import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cart = ({ className }) => {
  return (
    <div className={className}>
      Cart
    </div>
  )
}

Cart.propTypes = {
  className: PropTypes.string,
};

const StyledCart = styled(Cart)`

`;

StyledCart.displayName = 'Cart';

export default StyledCart;
