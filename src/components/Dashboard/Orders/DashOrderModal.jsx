import React, { useEffect, useContext } from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Button, Card, Flex, Heading, Text } from 'rebass';
import { SharedContext } from '../../../contexts/SharedContext';

const DashOrderModal = () => {
  const {
    isOrderModalOpen,
    setIsOrderModalOpen,
    orderDetail,
    setOrderDetail,
    updateOrderDetail,
  } = useContext(SharedContext);

  console.log(orderDetail);

  const createdTime = new Date(orderDetail.order.create_at * 1000);
  const paidTime = new Date(orderDetail.order.paid_date * 1000);

  return (
    <StyledModal isOpen={isOrderModalOpen}>
      <StyledTitle>{`Edit Order id ${orderDetail.order.id}`}</StyledTitle>

      <Flex m={2} justifyContent='space-around'>
        <StyledFlex flexDirection='column' justifyContent='center'>
          <div>{createdTime.toLocaleString()}</div>
          <div>{orderDetail.order.total}</div>
          <div>{orderDetail.order.is_paid}</div>
          <div>{paidTime.toLocaleString()}</div>
          <div>{orderDetail.order.message}</div>
        </StyledFlex>
        <Flex flexDirection='column' justifyContent='space-around'>
          <div>
            Name
            <input
              type='text'
              placeholder='Edit recipients name'
              size='50'
              value={orderDetail.order.user.name}
              onChange={e =>
                setOrderDetail({
                  ...orderDetail.order.user,
                  name: e.target.value,
                })
              }
            />
          </div>

          <div>
            E-mail
            <input
              type='email'
              placeholder='Edit recipients email'
              size='50'
              value={orderDetail.order.user.email}
              onChange={e =>
                setOrderDetail({
                  ...orderDetail.order.user,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div>
            Tel
            <input
              type='text'
              placeholder='Edit recipients phone munber'
              size='20'
              value={orderDetail.order.user.tel}
              onChange={e =>
                setOrderDetail({
                  ...orderDetail.order.user,
                  tel: e.target.value,
                })
              }
            />
          </div>
        </Flex>
      </Flex>

      <Flex justifyContent='flex-end'>
        <StyledButton
          m={1}
          ml='30px'
          width='150px'
          bg='green'
          onClick={() => updateOrderDetail(orderDetail.id)}
        >
          Submit
        </StyledButton>
        <StyledButton
          m={1}
          width='150px'
          bg='orange'
          color='green'
          onClick={() => setIsOrderModalOpen(false)}
          onKeyDown={e => {
            if (e.keyCode === 27) setIsOrderModalOpen(false);
          }}
        >
          Close
        </StyledButton>
      </Flex>
    </StyledModal>
  );
};

const StyledModal = Modal.styled`
width: 800px;
height: 600px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 2px solid ${props => props.theme.colors.green};
background-color: ${props => props.theme.colors.white};
`;

const StyledTitle = styled.div`
  padding-left: 8px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.green};
  font-size: 20px;
  font-weight: 500;
  line-height: 2;
`;

const StyledFlex = styled(Flex)`
  height: 500px;
`;

const StyledButton = styled(Button)`
  &:hover {
    cursor: pointer;
  }
`;

export default DashOrderModal;
