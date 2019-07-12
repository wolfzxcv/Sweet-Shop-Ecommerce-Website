import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Button, Card, Heading, Flex, Image, Text } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { SharedContext } from '../../contexts/SharedContext';

const ProductDetail = ({ className, match }) => {
  const {
    product,
    setProduct,
    amount,
    setAmount,
    isLaptop,
    addToCart,
  } = useContext(SharedContext);

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = () => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/product/${match.params.id}`
      )
      .then(response => setProduct(response.data.product));
  };

  let qty = amount;

  return (
    <div className={className}>
      <Flex width={['97vw', '90%']} flexDirection={['column', 'row']} mx='auto'>
        <Card pt={['20px', '']}>
          <Flex justifyContent='center'>
            {!isLaptop && <Heading>{product.title}</Heading>}
          </Flex>
          <Image src={product.imageUrl} />

          <Flex justifyContent='center'>
            <AmountButton
              bg='white'
              onClick={() => setAmount(amount - 1)}
              disabled={amount === 1}
            >
              -
            </AmountButton>
            <AmountButton bg='greenWhite'>{amount}</AmountButton>
            <AmountButton
              bg='white'
              onClick={() => setAmount(amount + 1)}
              disabled={amount >= product.unit}
            >
              +
            </AmountButton>
          </Flex>

          <StyledButton
            onClick={() => addToCart(match.params.id, qty)}
            width={['97vw', '300px']}
            bg='white'
            color='green'
            id={match.params.id}
            fontSize='26px'
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            {`  Add to cart`}
          </StyledButton>
        </Card>
        <Box px={3} pt={['25px', '']} fontSize='20px'>
          <Flex flexDirection='column' justifyContent='space-between'>
            {isLaptop && <Heading>{product.title}</Heading>}
            <Flex justifyContent={['space-between', 'flex-end']}>
              {!isLaptop && <Text>{`${product.unit} available`}</Text>}
              <Heading>{`kr ${product.price}`}</Heading>
            </Flex>

            <br />

            <Flex justifyContent='space-between'>
              <Box>
                <Flex>
                  <Text mr={3}>Allergens</Text>
                  <Text bg='greenWhite'>{product.description}</Text>
                </Flex>
              </Box>
              {isLaptop && <Text>{`${product.unit} available`}</Text>}
            </Flex>

            {isLaptop && <br />}
            {isLaptop && <br />}
            <br />

            <Flex justifyContent='flex-end'>
              <Flex alignItems='center'>
                <Text pr={3}>Detail</Text>
              </Flex>
              <Text px={2} bg='greenWhite'>
                {product.content}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

ProductDetail.propTypes = {
  className: PropTypes.string.isRequired,
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const AmountButton = styled(Button)`
  margin-bottom: 10px;
  height: 50px;
  width: 50px;
  color: ${props => props.theme.colors.green};
  border: 1px solid ${props => props.theme.colors.green};
  font-size: 26px;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  height: 60px;
  transition: 0.3s all;
  font-family: 'Shadows Into Light', cursive;
  letter-spacing: 3px;
  border: 1px solid ${props => props.theme.colors.green};
  &:hover {
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
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

const StyledProductDetail = styled(ProductDetail)`
  margin: 10px auto 0 auto;

  @media (min-width: 769px) {
    width: 1024px;
    height: 500px;
  }
  @media (max-width: 768px) {
    height: 1100px;
  }
`;

StyledProductDetail.displayName = 'ProductDetail';

export default StyledProductDetail;
