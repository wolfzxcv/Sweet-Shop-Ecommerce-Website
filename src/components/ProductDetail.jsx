import React, { useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Box, Button, Card, Heading, Flex, Image, Text } from 'rebass';
import PropTypes from 'prop-types';
import { SharedContext } from '../contexts/SharedContext';

const ProductDetail = ({ className, match }) => {
  const { item, setItem, isLaptop } = useContext(SharedContext);

  React.useEffect(() => {
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

  return (
    <div className={className}>
      <Flex width={['97vw', '90%']} flexDirection={['column', 'row']} mx='auto'>
        <Card>
          <Image src={item.imageUrl} />
          <Flex justifyContent='center'>
            <StyledButton
              width='300px'
              bg='green'
              id={match.params.id}
              fontSize='26px'
            >
              Add to cart
            </StyledButton>
          </Flex>
        </Card>
        <Box px={3} pt={['25px', '']} fontSize='20px'>
          <Flex flexDirection='column' justifyContent='space-between'>
            <Heading>{item.title}</Heading>
            <Flex justifyContent='flex-end'>
              <Heading>{`€ ${item.price}`}</Heading>
            </Flex>

            <br />
            <Flex>
              <Text pr={3}>Allergens</Text>
              <Text bg='greenWhite'>{item.description}</Text>
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

const StyledProductDetail = styled(ProductDetail)`
  background-color: ${props => props.theme.colors.orange};
  margin-top: 10px;

  @media (min-width: 769px) {
    padding-top: 50px;
    height: 400px;
  }
  @media (max-width: 768px) {
    /* padding-top: 50px; */
    height: 1000px;
  }
`;

StyledProductDetail.displayName = 'ProductDetail';

export default StyledProductDetail;
