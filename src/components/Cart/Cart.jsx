import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CartList from './CartList';
import { SharedContext } from '../../contexts/SharedContext';

const Cart = ({ className }) => {
  const { totalPrice, orderList } = useContext(SharedContext);

  return (
    <div className={className}>
      <div className='left'>
        <div className='yourcart'>Your cart</div>
        {orderList.length === 0 && <div>Oops! Your cart is empty.</div>}

        {orderList.map(item => (
          <CartList
            key={item.id}
            id={item.id}
            title={item.product.title}
            image={item.product.imageUrl}
            price={item.product.price}
            total={item.final_total.toFixed(2)}
            qty={item.qty}
          />
        ))}
      </div>

      <div className='right'>
        <div className='summary'>Summary</div>
        <div>
          <div className='price'>
            <div>price</div>
            <div>{`€ ${totalPrice}`}</div>
          </div>
          <div className='shipment'>
            <div>shipment</div>
            <div>€ 0.00</div>
          </div>
          <div className='total'>
            <div>Total</div>
            <div>{`€ ${totalPrice}`}</div>
          </div>
        </div>
        <div className='checkout'>
          {orderList.length !== 0 && (
            <Link to='/Sweet-for-happiness/checkout'>Proceed to checkout</Link>
          )}
        </div>
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
    .left {
      margin-right: 30px;
      width: 600px;
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
    }
  }
`;

StyledCart.displayName = 'Cart';

export default StyledCart;
