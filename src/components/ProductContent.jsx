import React from 'react';
import styled from 'styled-components';
import { Box, Button, Card, Flex, Image, Text } from 'rebass';
import PropTypes from 'prop-types';

const ProductContent = ({ id, title, image, price, advice, detail }) => {
  return (
    <Flex>
      <Card
        width='350px'
        mb={5}
        border='1px solid green'
        borderRadius={8}
        boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'
      >
        <Flex flexDirection='column' alignItems='center'>
          <StyledImage src={image} borderRadius={8} />

          <StyeldBox width='100%' bg='orange' fontSize='18px'>
            <Flex justifyContent='space-between' alignItems='center'>
              <Text width='75%' pl={1} fontWeight='bold'>
                {title}
              </Text>
              <Text width='25%' pl={3}>{`€ ${price}`}</Text>
            </Flex>
          </StyeldBox>

          <StyledButton width='350px' bg='green' id={id} fontSize='26px'>
            Add to cart
          </StyledButton>
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

const StyledImage = styled(Image)`
  transition: 0.8s all;
  &:hover {
    transform: scale(1.1) rotate(-7deg);
    box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

const StyeldBox = styled(Box)`
  line-height: 3;
  div {
    border: 1px solid ${props => props.theme.colors.greenWhite};
  }
`;

const StyledButton = styled(Button)`
  height: 60px;
  transition: 0.3s all;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.theme.colors.greenWhite};
    color: ${props => props.theme.colors.green};
    cursor: pointer;
  }
`;

export default ProductContent;
