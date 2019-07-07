import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { useMedia } from 'use-media';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProductExample from './ProductExample';
import { SharedContext } from '../contexts/SharedContext';

const ProductContent = ({ className }) => {
  const isLaptop = useMedia({ minWidth: 769 });
  const { product, setProduct } = useContext(SharedContext);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/products/all`
      )
      .then(result => setProduct(result.data.products));
  }, [setProduct]);
  console.log(product);

  return (
    <div className={className}>
      <div className='left'>
        <div>Category</div>
        <div>All (48)</div>
        <div>Best Choice(10)</div>
        <div>Popular(26)</div>
        <div>New Arrivals(12)</div>
      </div>
      <div className='right'>
        <ProductExample />
        <ProductExample />
        <ProductExample />
        {isLaptop && <ProductExample />}
        {isLaptop && <ProductExample />}
        {isLaptop && <ProductExample />}
      </div>
    </div>
  );
};

ProductContent.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledProductContent = styled(ProductContent)`
  .left {
    display: flex;
    flex-direction: column;
    font-size: 24px;

    div {
      height: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
      &:first-child {
        background-color: ${props => props.theme.colors.green};
        color: ${props => props.theme.colors.white};
      }
      &:not(:first-child) {
        border: 1px solid ${props => props.theme.colors.greenWhite};
      }
      &:hover:not(:first-child) {
        background-color: ${props => props.theme.colors.greenWhite};
        cursor: pointer;
      }
    }
  }

  @media (min-width: 769px) {
    display: flex;
    justify-content: center;

    .left {
      width: 230px;
    }

    .right {
      width: 75%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .left {
      width: 97vw;
      margin-bottom: 30px;
    }
  }
`;

StyledProductContent.displayName = 'Product';

export default StyledProductContent;
