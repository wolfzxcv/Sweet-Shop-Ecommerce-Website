import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Button, Card, Flex, Heading } from 'rebass';
import { SharedContext } from '../contexts/SharedContext';

const CheckoutOrderDetail = ({ match }) => {
  const { orderDetail, setOrderDetail, confirmPayment } = useContext(
    SharedContext
  );

  useEffect(() => {
    getOrederDetail();
  }, []);

  const getOrederDetail = () => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/order/${match.params.id}`
      )
      .then(response => {
        setOrderDetail(response.data);
        console.log('getOrederDetail ', response.data);
        console.log('orderDetail', response.data);
      });
  };
  const time = new Date(orderDetail.order.create_at * 1000);

  return (
    <Box my={3}>
      <Flex justifyContent='center' alignItems='center' flexDirection='column'>
        <Card width={['95vw', '390px']}>
          <Heading bg='greenWhite' my={1}>
            <Flex justifyContent='center'>Order info</Flex>
          </Heading>

          <StyledFlex flexDirection='column'>
            <div>{time.toLocaleString()}</div>
            <div>
              {orderDetail.order.is_paid === true ? 'paid' : 'need to pay'}
            </div>
            <div>{`€ ${orderDetail.order.total}`}</div>
          </StyledFlex>

          <Heading bg='greenWhite' my={1}>
            <Flex justifyContent='center'>receiver info</Flex>
          </Heading>
          <StyledFlex flexDirection='column'>
            <div>{orderDetail.order.user.name}</div>
            <div>{orderDetail.order.user.email}</div>
            <div>{orderDetail.order.user.tel}</div>
            <div>{orderDetail.order.user.address}</div>
            <div>{orderDetail.order.message}</div>
          </StyledFlex>
        </Card>
        <StyledButton
          onClick={() => {
            confirmPayment(orderDetail.order.id);
            getOrederDetail();
          }}
          width={['97vw', '390px']}
          bg='green'
          fontSize='26px'
        >
          Confirm payment
        </StyledButton>
      </Flex>
    </Box>
  );
};
CheckoutOrderDetail.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const StyledFlex = styled(Flex)`
  div {
    height: 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.greenWhite};

    &:nth-child(odd) {
      background-color: ${props => props.theme.colors.orange};
      color: ${props => props.theme.colors.green};
    }
    &:nth-child(even) {
      background-color: ${props => props.theme.colors.green};
      color: ${props => props.theme.colors.orange};
    }
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

export default CheckoutOrderDetail;
