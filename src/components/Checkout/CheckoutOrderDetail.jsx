import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Button, Card, Flex, Heading, Text } from 'rebass';
import { SharedContext } from '../../contexts/SharedContext';

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
      });
  };
  const time = new Date(orderDetail.order.create_at * 1000);

  return (
    <Box my={3}>
      <Flex justifyContent='center' alignItems='center' flexDirection='column'>
        <Card width={['95vw', '390px']}>
          <Heading bg='greenWhite' my={1}>
            <Flex justifyContent='center'>Order</Flex>
          </Heading>

          <StyledFlex flexDirection='column'>
            <div>
              <Text width='100px' pl={2}>
                Create at
              </Text>
              <Text>{time.toLocaleString()}</Text>
            </div>
            <div>
              <Text width='100px' pl={2}>
                Status
              </Text>
              <PaymentColor>
                {orderDetail.order.is_paid === true ? 'paid' : 'need to pay'}
              </PaymentColor>
            </div>
            <div>
              <Text width='100px' pl={2}>
                Total
              </Text>
              <Text>{`kr ${orderDetail.order.total}`}</Text>
            </div>
          </StyledFlex>

          <Heading bg='greenWhite' my={1}>
            <Flex justifyContent='center'>Recipient</Flex>
          </Heading>
          <StyledFlex flexDirection='column'>
            <div>
              <Text width='100px' pl={2}>
                Name
              </Text>
              <Text>{orderDetail.order.user.name}</Text>
            </div>
            <div>
              <Text width='100px' pl={2}>
                Email
              </Text>
              <Text>{orderDetail.order.user.email}</Text>
            </div>
            <div>
              <Text width='100px' pl={2}>
                Tel
              </Text>
              <Text>{orderDetail.order.user.tel}</Text>
            </div>
            <div>
              <Text width='100px' pl={2}>
                Address
              </Text>
              <Text>{orderDetail.order.user.address}</Text>
            </div>
            <div>
              <Text width='100px' pl={2}>
                Message
              </Text>
              <Text>{orderDetail.order.message}</Text>
            </div>
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
          {orderDetail.order.is_paid === true
            ? 'Payment Completed'
            : 'Confirm Payment'}
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
    background-color: ${props => props.theme.colors.orange};
  }
`;

const StyledButton = styled(Button)`
  height: 60px;
  &:hover {
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.theme.colors.greenWhite};
    color: ${props => props.theme.colors.green};
    cursor: pointer;
  }
`;

const PaymentColor = styled(Text)`
  color: green;
`;

export default CheckoutOrderDetail;
