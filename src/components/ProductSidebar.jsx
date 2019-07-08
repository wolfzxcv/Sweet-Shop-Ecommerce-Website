import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { SharedContext } from '../contexts/SharedContext';

const ProductSidebar = ({ category, handleChange }) => {
  const { product } = useContext(SharedContext);
  return (
    <Flex
      ml={['0', '20px']}
      justifyContent='center'
      alignItems='center'
      onClick={() => handleChange(category)}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
      {`(${
        product
          .filter(item => category.includes(item.category))
          .filter(check => check.is_enabled !== '0').length
      })`}
    </Flex>
  );
};

ProductSidebar.propTypes = {
  category: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ProductSidebar;
