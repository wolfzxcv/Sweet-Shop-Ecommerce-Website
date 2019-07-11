import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Button, Card, Flex, Image, Text } from 'rebass';
import { SharedContext } from '../../contexts/SharedContext';

const ProductContent = ({ id, title, image, price }) => {
  const { addToCart } = useContext(SharedContext);
  return (
    <Flex>
      <Card
        width='300px'
        mb={3}
        border='1px solid green'
        borderRadius={8}
        boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'
      >
        <Flex flexDirection='column' alignItems='center'>
          <Link to={`/Sweet-for-happiness/product/goNorway${id}`}>
            <StyledImage src={image} borderRadius={8} />
          </Link>

          <StyeldBox width='100%' bg='orange' fontSize='16px'>
            <Flex justifyContent='space-between' alignItems='center'>
              <Text width='70%' pl={1} fontWeight='bold'>
                {title}
              </Text>
              <Text width='30%' pl={3}>{`€ ${price}`}</Text>
            </Flex>
          </StyeldBox>

          <StyledButton
            onClick={() => addToCart(id)}
            width='300px'
            bg='green'
            id={id}
            fontSize='26px'
          >
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
};

const StyledImage = styled(Image)`
  transition: 0.8s all;
  &:hover {
    box-shadow: 0 2px 3px 3px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  @media (min-width: 769px) {
    &:hover {
      transform: scale(1.1) rotate(-7deg);
    }
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
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.theme.colors.greenWhite};
    color: ${props => props.theme.colors.green};
    cursor: pointer;
  }
  @media (min-width: 769px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default ProductContent;
