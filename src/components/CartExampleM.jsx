import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CartExampleM = ({ className }) => {
  return (
    <div className={className}>
      <div className='upper'>
        <div className='left'>
          <img src={require('../images/cake.png')} alt='' />
        </div>

        <div className='right'>
          <div className='items'>
            <div>Best Sweet</div>
            <div className='price2'>€ 5.99</div>
          </div>
          <div className='amount'>
            <div>-</div>
            <input type='text' />
            <div>+</div>
          </div>
        </div>
      </div>
      <div className='price'>€ 6.20</div>
    </div>
  );
};

CartExampleM.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledCartExampleM = styled(CartExampleM)`
  width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 20px;

  img {
    width: 110px;
    height: 110px;
  }

  .upper {
    margin: 10px 0;
    display: flex;

    .right {
      height: 110px;
      width: 260px;
      display: flex;
      flex-direction: column;
      .items {
        width: 150px;
        line-height: 1.5;
        .price2 {
          font-size: 16px;
        }
      }
      .amount {
        width: 150px;
        display: flex;
        justify-content: space-evenly;
        div {
          width: 48px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid ${props => props.theme.colors.greenWhite};
        }
        input {
          padding: 0;
          width: 48px;
          height: 46px;
        }
      }
    }
  }

  .price {
    padding: 15px 0;
    border-top: 1px solid ${props => props.theme.colors.greenWhite};
    border-bottom: 1px solid ${props => props.theme.colors.greenWhite};
    font-weight: 700;
    width: 320px;
    display: flex;
    justify-content: flex-end;
  }
`;

StyledCartExampleM.displayName = 'CartExampleM';

export default StyledCartExampleM;
