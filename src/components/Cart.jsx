import React from 'react';
import { useMedia } from 'use-media';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CartExample from './CartExample';
import CartExampleM from './CartExampleM';
import Underline from './Underline';

const Cart = ({ className }) => {
  const isLaptop = useMedia({ minWidth: 769 });
  return (
    <div className={className}>
      <div className='left'>
        <div className='yourcart'>Your cart</div>
        {isLaptop ? <CartExample /> : <CartExampleM />}
        {isLaptop && <Underline />}
        {isLaptop ? <CartExample /> : <CartExampleM />}
        {isLaptop && <Underline />}
        {isLaptop ? <CartExample /> : <CartExampleM />}
      </div>

      <div className='right'>
        <div className='summary'>Summary</div>
        <div>
          <div className='price'>
            <div>price</div>
            <div>€ 26.49</div>
          </div>
          <div className='shipment'>
            <div>shipment</div>
            <div>€ 15.00</div>
          </div>
          <div className='total'>
            <div>Total</div>
            <div>€ 41.49</div>
          </div>
        </div>

        <div className='checkout'>Proceed to checkout</div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledCart = styled(Cart)`
  display: flex;
  justify-content: center;

  @media (min-width: 769px) {
    margin: 50px 0;
    .yourcart {
      width: 92%;
    }
    .right {
      color: ${props => props.theme.colors.greenWhite};
      background-color: ${props => props.theme.colors.green};
      .summary {
        border-bottom: 1px solid ${props => props.theme.colors.greenWhite};
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      .yourcart {
        width: 95vw;
        margin-bottom: 30px;
      }
      display: flex;
      justify-content: center;
    }
    .right {
      color: ${props => props.theme.colors.green};
      background-color: ${props => props.theme.colors.white};
      .summary {
        margin-top: 20px;
        background-color: ${props => props.theme.colors.greenWhite};
      }
    }
  }

  .yourcart {
    height: 65px;
    font-size: 24px;
    background-color: ${props => props.theme.colors.greenWhite};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right {
    width: 300px;
    height: 293px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .summary {
      width: 100%;
      height: 50px;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .price,
    .shipment,
    .total {
      width: 280px;
      display: flex;
      justify-content: space-between;
      line-height: 2.5;
    }
    .total {
      font-size: 20px;
    }

    .checkout {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 3px solid ${props => props.theme.colors.orange};
      font-size: 24px;
      color: ${props => props.theme.colors.green};
      background-color: ${props => props.theme.colors.orange};
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

StyledCart.displayName = 'Cart';

export default StyledCart;
