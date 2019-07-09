import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { SharedContext } from '../contexts/SharedContext';

const CartOnScreen = () => {
  const { getCart, orderList } = useContext(SharedContext);

  useEffect(() => {
    getCart();
  }, [getCart, orderList.length]);

  return (
    <div>
      <StyledCartButton>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className='cart-button-total'>{orderList.length}</span>
      </StyledCartButton>
    </div>
  );
};

export default CartOnScreen;

const StyledCartButton = styled.div`
  padding-top: 10px;
  width: 80px;
  height: 60px;
  background: ${props => props.theme.colors.green};
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  font-size: 46px;
  position: fixed;
  text-align: center;
  z-index: 500;
  bottom: 50px;
  right: 30px;

  .cart-button-total {
    width: 36px;
    height: 36px;
    background: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.green};
    border-radius: 50%;
    color: ${props => props.theme.colors.green};
    font-size: 28px;
    font-weight: bold;
    position: absolute;
    right: -12px;
    top: -12px;
  }
`;
