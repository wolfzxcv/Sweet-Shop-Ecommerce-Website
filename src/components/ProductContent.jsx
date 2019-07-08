import React from 'react';
import { Card, Flex, Image, Text } from 'rebass';
import PropTypes from 'prop-types';

const ProductContent = ({ id, title, image, price, advice, detail }) => {
  return (
    <Flex>
      <Card width='300px' mb={5} border='1px solid green' borderRadius={8}>
        <Flex flexDirection='column' alignItems='center'>
          <Text>{id}</Text>
          <Text>{title}</Text>
          <Text>{`€ ${price}`}</Text>
          <Image width='300px' src={image} borderRadius={8} />
          <Text>{advice}</Text>
          <Text>{detail}</Text>
        </Flex>
      </Card>
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
