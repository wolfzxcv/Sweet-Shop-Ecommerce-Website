import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SharedContext } from '../contexts/SharedContext';

const ProductDetail = ({ className }) => {
  const { item } = useContext(SharedContext);

  return (
    <div className={className}>
      <div>{item.title}</div>
      <div>{`€ ${item.price}`}</div>
      <div>{item.description}</div>
      <div>{item.content}</div>
    </div>
  );
};

ProductDetail.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledProductDetail = styled(ProductDetail)`
  div {
    border: 1px solid red;
  }
`;

StyledProductDetail.displayName = 'ProductDetail';

export default StyledProductDetail;
