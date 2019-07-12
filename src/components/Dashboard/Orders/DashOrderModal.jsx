import React, { useContext } from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import { Button, Flex, Text } from 'rebass';
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
      <StyledTitle>
        {`Edit ${orderDetail.order.user.name}'s order || order's id: ${
          orderDetail.order.id
        }`}
      </StyledTitle>

      <Flex m={2} justifyContent='space-around'>
        <Flex flexDirection='column' justifyContent='space-around'>
          <Flex>
            <Text width='200px'>Created at:</Text>
            <Text>{createdTime.toLocaleString()}</Text>
          </Flex>

          <Flex>
            <Text width='200px'>Total:</Text>
            <Text>{orderDetail.order.total}</Text>
          </Flex>

          <Flex>
            <Text width='200px'>Paid at:</Text>
            <Text>{paidTime.toLocaleString()}</Text>
          </Flex>

          <Flex>
            <Text width='200px'>Payment status:</Text>
            <Text>{orderDetail.order.is_paid}</Text>
          </Flex>

          <div>
            <Text width='200px'> Name</Text>
            <input
              type='text'
              placeholder='Edit recipients name'
              size='50'
              value={orderDetail.order.user.name}
              onChange={e =>
                setOrderDetail({
                  ...orderDetail,
                  order: {
                    ...orderDetail.order,
                    user: {
                      ...orderDetail.order.user,
                      name: e.target.value,
                    },
                  },
                })
              }
            />
          </div>

          <div>
            <Text width='200px'>E-mail</Text>
            <input
              type='email'
              placeholder='Edit recipients email'
              size='50'
              value={orderDetail.order.user.email}
              onChange={e =>
                setOrderDetail({
                  ...orderDetail,
                  order: {
                    ...orderDetail.order,
                    user: {
                      ...orderDetail.order.user,
                      email: e.target.value,
                    },
                  },
                })
              }
            />
          </div>

          <div>
            <Text width='200px'>Tel</Text>
            <input
              type='text'
              placeholder='Edit recipients phone munber'
              size='20'
              value={orderDetail.order.user.tel}
              onChange={e =>
                setOrderDetail({
                  ...orderDetail,
                  order: {
                    ...orderDetail.order,
                    user: {
                      ...orderDetail.order.user,
                      tel: e.target.value,
                    },
                  },
                })
              }
            />
          </div>

          <div>
            <Text width='200px'>Message</Text>
            <textarea
              placeholder='Edit message...'
              rows='3'
              cols='60'
              value={orderDetail.order.message}
              onChange={e =>
                setOrderDetail({
                  ...orderDetail,
                  order: {
                    ...orderDetail.order,
                    message: e.target.value,
                  },
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
width: 700px;
height: 600px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 2px solid ${props => props.theme.colors.green};
background-color: ${props => props.theme.colors.white};
div{
  line-height:2;
}
`;

const StyledTitle = styled.div`
  padding-left: 8px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.green};
  font-size: 20px;
  font-weight: 500;
  line-height: 2;
`;

const StyledButton = styled(Button)`
  &:hover {
    cursor: pointer;
  }
`;

export default DashOrderModal;
