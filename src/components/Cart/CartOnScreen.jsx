import React, { useState, useEffect, useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { SharedContext } from '../../contexts/SharedContext';

const CartOnScreen = () => {
  const { orderList, getCart } = useContext(SharedContext);
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    getCart();
    toggle(!state);
  }, [orderList.length]);

  return (
    <Link to='/Sweet-for-happiness/cart'>
      <StyledCartButton>
        <animated.div
          style={{
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
              })
              .interpolate(x => `scale(${x})`),
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className='cart-button-total'>{orderList.length}</span>
        </animated.div>
      </StyledCartButton>
    </Link>
  );
};

export default CartOnScreen;

const StyledCartButton = styled.div`
  transition: 0.4s all;
  padding-top: 10px;
  border: 1px solid ${props => props.theme.colors.greenWhite};
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
  background: ${props => props.theme.colors.green};
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  position: fixed;
  text-align: center;
  z-index: 500;
  right: 30px;

  .cart-button-total {
    background: ${props => props.theme.colors.white};
    border: 2px solid ${props => props.theme.colors.green};
    border-radius: 50%;
    color: ${props => props.theme.colors.green};
    font-weight: bold;
    position: absolute;
  }

  @media (min-width: 769px) {
    width: 80px;
    height: 60px;
    font-size: 46px;
    bottom: 50px;
    &:hover {
      transform: scale(1.3);
    }
    .cart-button-total {
      width: 36px;
      height: 36px;
      font-size: 28px;
      right: -12px;
      top: -12px;
    }
  }

  @media (max-width: 768px) {
    width: 64px;
    height: 48px;
    font-size: 36px;
    top: 25px;
    .cart-button-total {
      width: 24px;
      height: 24px;
      font-size: 20px;
      right: -8px;
      top: -8px;
    }
  }
`;
