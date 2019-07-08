import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SharedContext } from '../contexts/SharedContext';

const ProductDetail = ({ className, id }) => {
  const { item, fetchProductDetail } = useContext(SharedContext);

  useEffect(() => {
    fetchProductDetail(id);
  }, [id, fetchProductDetail]);

  console.log(item);

  return (
    <div className={className}>
      <div>123</div>
      <div className='name'>
        <div>Sweet</div>
        <div>€ 6.20</div>
      </div>
      <div className='add2cart'>Add to Cart</div>
    </div>
  );
};

ProductDetail.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const StyledProductDetail = styled(ProductDetail)`
  margin: 0 0 20px 20px;
  
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

StyledProductDetail.displayName = 'ProductDetail';

export default StyledProductDetail;
