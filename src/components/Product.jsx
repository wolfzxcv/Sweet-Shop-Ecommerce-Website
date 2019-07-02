import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Product = ({ className }) => {
  return <div className={className}>product</div>;
};

Product.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledProduct = styled(Product)``;

StyledProduct.displayName = 'Product';

export default StyledProduct;
