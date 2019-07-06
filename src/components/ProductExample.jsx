import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import product from '../images/cake.png';

const ProductExample = ({ className }) => {
  return (
    <div className={className}>
      <div className='img'>
        <div className='select'>Daily select</div>
        <div>
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
      <div className='name'>
        <div>Sweet</div>
        <div>€ 6.20</div>
      </div>
      <div className='add2cart'>Add to Cart</div>
    </div>
  );
};

ProductExample.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledProductExample = styled(ProductExample)`
  margin: 0 0 20px 20px;
  .img {
    background-image: url(${product});
    background-size: cover;
    width: 315px;
    height: 315px;
    display: flex;
    justify-content: space-between;
    div {
      margin: 0 15px;
      padding: 10px;
      font-size: 16px;
    }
    .select {
      height: 20px;
      background-color: ${props => props.theme.colors.green};
      color: ${props => props.theme.colors.white};
      border-radius: 5px;
    }
  }

  .name {
    width: 315px;
    height: 56px;
    display: flex;
    div {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      border: 1px solid ${props => props.theme.colors.greenWhite};
    }
  }

  .add2cart {
    width: 315px;
    height: 65px;
    background-color: ${props => props.theme.colors.greenWhite};
    font-size: 24px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

StyledProductExample.displayName = 'ProductExample';

export default StyledProductExample;
