import React from 'react';
import { Box, Flex, Image, Text } from 'rebass';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductContent = ({ id, title, image, price, advice, detail }) => {
  return (
    <Flex>
      <Box width='300px'>
        <Text>{id}</Text>
        <Text>{title}</Text>
        <Text>{price}</Text>
        <Image width='240px' src={image} borderRadius={8} />
        <Text>{advice}</Text>
        <Text>{detail}</Text>
      </Box>
    </Flex>
  );
};

ProductContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  advice: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
};

export default ProductContent;
