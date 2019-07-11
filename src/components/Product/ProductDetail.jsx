import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Box, Button, Card, Heading, Flex, Image, Text } from 'rebass';
import PropTypes from 'prop-types';
import { SharedContext } from '../../contexts/SharedContext';

const ProductDetail = ({ className, match }) => {
  const { item, setItem, amount, setAmount, isLaptop, addToCart } = useContext(
    SharedContext
  );

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
      .then(response => setItem(response.data.product));
  };

  let qty = amount;

  return (
    <div className={className}>
      <Flex width={['97vw', '90%']} flexDirection={['column', 'row']} mx='auto'>
        <Card pt={['20px', '']}>
          <Flex justifyContent='center'>
            {!isLaptop && <Heading>{item.title}</Heading>}
          </Flex>
          <Image src={item.imageUrl} />

          <Flex justifyContent='center'>
            <AmountButton
              bg='greenWhite'
              onClick={() => setAmount(amount - 1)}
              disabled={amount === 1}
            >
              -
            </AmountButton>
            <AmountButton bg='orange'>{amount}</AmountButton>
            <AmountButton
              bg='greenWhite'
              onClick={() => setAmount(amount + 1)}
              disabled={amount >= item.unit}
            >
              +
            </AmountButton>
          </Flex>

          <StyledButton
            onClick={() => addToCart(match.params.id, qty)}
            width={['97vw', '300px']}
            bg='green'
            id={match.params.id}
            fontSize='26px'
          >
            Add to cart
          </StyledButton>
        </Card>
        <Box px={3} pt={['25px', '']} fontSize='20px'>
          <Flex flexDirection='column' justifyContent='space-between'>
            {isLaptop && <Heading>{item.title}</Heading>}
            <Flex justifyContent={['space-between', 'flex-end']}>
              {!isLaptop && <Text>{`${item.unit} available`}</Text>}
              <Heading>{`€ ${item.price}`}</Heading>
            </Flex>

            <br />

            <Flex justifyContent='space-between'>
              <Text>Allergens</Text>
              <Text bg='greenWhite'>{item.description}</Text>
              {isLaptop && <Text>{`${item.unit} available`}</Text>}
            </Flex>

            {isLaptop && <br />}
            {isLaptop && <br />}
            <br />

            <Flex justifyContent='flex-end'>
              <Flex alignItems='center'>
                <Text pr={3}>Detail</Text>
              </Flex>
              <Text px={2} bg='greenWhite'>
                {item.content}
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

const StyledProductDetail = styled(ProductDetail)`
  background-color: ${props => props.theme.colors.orange};
  margin-top: 10px;

  @media (min-width: 769px) {
    height: 450px;
  }
  @media (max-width: 768px) {
    height: 1100px;
  }
`;

StyledProductDetail.displayName = 'ProductDetail';

export default StyledProductDetail;
