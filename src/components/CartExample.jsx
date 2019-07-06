import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartExample = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <img src={require('../images/cake.png')} alt='img' />
      </div>
      <div className='items'>
        <div>Best Sweet</div>
        <div>€ 5.99</div>
      </div>
      <div className='amount'>
        <div>-</div>
        <input type='text' />
        <div>+</div>
      </div>
      <div className='price'>€ 6.20</div>
      <div className='trash'>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

CartExample.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledCartExample = styled(CartExample)`
  width: 620px;
  height: 130px;
  font-size: 20px;
  display: flex;
  align-items: center;

  img {
    width: 110px;
    height: 110px;
  }

  .items {
    margin-left: 25px;
    width: 107px;
    div {
      display: flex;
      justify-content: center;
    }
  }

  .amount {
    margin-left: 25px;
    width: 150px;
    display: flex;
    justify-content: space-evenly;
    div {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${props => props.theme.colors.greenWhite};
    }
    input {
      padding: 0;
      width: 50px;
      height: 45px;
    }
  }

  .price,
  .trash {
    margin-left: 25px;
  }

  .trash {
    &:hover {
      cursor: pointer;
    }
  }
`;

StyledCartExample.displayName = 'CartExample';

export default StyledCartExample;
