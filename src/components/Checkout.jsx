import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Card, Flex, Heading, Text } from 'rebass';
import CheckoutList from './CheckoutList';
import { SharedContext } from '../contexts/SharedContext';

const Checkout = ({ className }) => {
  const {
    isLaptop,
    totalPrice,
    orderList,
    orderForm,
    setOrderForm,
  } = useContext(SharedContext);

  return (
    <div className={className}>
      <Flex
        flexDirection={['column', 'row']}
        justifyContent={['', 'space-around']}
      >
        <StyledForm>
          <Heading width={['97vw', '435px']} bg='greenWhite' my={1}>
            <Flex justifyContent='center'>Recipient</Flex>
          </Heading>

          <Flex>
            <Text width='70px'>
              <Flex alignItems='center'> Name</Flex>
            </Text>
            <input
              type='text'
              placeholder='write your name'
              size='45'
              value={orderForm.name}
              onChange={e =>
                setOrderForm({ ...orderForm, name: e.target.value })
              }
            />
          </Flex>

          <Flex>
            <Text width='70px'>
              <Flex alignItems='center'> E-mail</Flex>
            </Text>

            <input
              type='email'
              placeholder='write your E-mail'
              size='45'
              value={orderForm.email}
              onChange={e =>
                setOrderForm({ ...orderForm, email: e.target.value })
              }
            />
          </Flex>

          <Flex>
            <Text width='70px'>
              <Flex alignItems='center'>Tel</Flex>
            </Text>

            <input
              type='tel'
              placeholder='write your phone number'
              size='45'
              value={orderForm.tel}
              onChange={e =>
                setOrderForm({ ...orderForm, tel: e.target.value })
              }
            />
          </Flex>

          <Flex>
            <Text width='70px'>
              <Flex alignItems='center'>Address</Flex>
            </Text>

            <input
              type='text'
              placeholder='write your address'
              size='45'
              value={orderForm.address}
              onChange={e =>
                setOrderForm({ ...orderForm, address: e.target.value })
              }
            />
          </Flex>

          <div>
            <Text width='70px'>
              <Flex alignItems='flex-end'>Message</Flex>
            </Text>
            <textarea
              placeholder='Message...'
              rows='4'
              cols='57'
              value={orderForm.message}
              onChange={e =>
                setOrderForm({ ...orderForm, message: e.target.value })
              }
            />
          </div>
        </StyledForm>

        <Flex order={['-1', '1']}>
          <Card width={['95vw', '390px']}>
            <Heading bg='greenWhite' my={1}>
              <Flex justifyContent='center'>Order info</Flex>
            </Heading>

            {orderList.map(item => (
              <CheckoutList
                key={item.id}
                title={item.product.title}
                price={item.product.price}
                total={item.final_total.toFixed(2)}
                qty={item.qty}
              />
            ))}

            <Box
              bg='greenWhite'
              width={['95vw', '390px']}
              fontSize='20px'
              my={1}
            >
              <Flex justifyContent='space-between'>
                <Box>
                  <Flex>
                    <div>price</div>
                    <div>{`€ ${totalPrice}`}</div>
                  </Flex>
                </Box>
                <Box>
                  <Flex>
                    <div>shipment</div>
                    <div>€ 0.00</div>
                  </Flex>
                </Box>
                <Box>
                  <Flex>
                    <div>Total</div>
                    <div>{`€ ${totalPrice}`}</div>
                  </Flex>
                </Box>
              </Flex>
            </Box>

            {isLaptop && (
              <div className='confirm'>
                {orderList.length !== 0 && (
                  <Link to='/Sweet-for-happiness/checkout'>Confirm Order</Link>
                )}
              </div>
            )}
          </Card>
        </Flex>
        {!isLaptop && (
          <div className='confirm'>
            {orderList.length !== 0 && (
              <Link to='/Sweet-for-happiness/checkout'>Confirm Order</Link>
            )}
          </div>
        )}
      </Flex>
    </div>
  );
};

Checkout.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledForm = styled(Card)`
  @media (min-width: 769px) {
    height: 350px;
  }
  @media (max-width: 768px) {
    height: 250px;
  }

  div {
    height: 30px;
    /* border: 1px solid red; */
  }
`;

const StyledCheckout = styled(Checkout)`
  margin-top: 30px;

  .confirm {
    margin: 20px 0 20px 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: ${props => props.theme.colors.orange};
    background-color: ${props => props.theme.colors.green};
  }
`;

StyledCheckout.displayName = 'Checkout';

export default StyledCheckout;