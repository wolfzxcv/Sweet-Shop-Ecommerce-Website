import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Card, Flex, Heading } from 'rebass';
import CheckoutList from './CheckoutList';
import { SharedContext } from '../contexts/SharedContext';

const Checkout = ({ className }) => {
  const { totalPrice, orderList } = useContext(SharedContext);

  return (
    <div className={className}>
      <Flex justifyContent={['', 'center']}>
        <Card width={['95vw', '390px']}>
          <Heading bg='greenWhite' my={1}>
            <Flex justifyContent='center'>Order info</Flex>
          </Heading>

          <div className='colorful'>
            {orderList.map(item => (
              <CheckoutList
                key={item.id}
                title={item.product.title}
                price={item.product.price}
                total={item.final_total.toFixed(2)}
                qty={item.qty}
              />
            ))}
          </div>
          <Box bg='greenWhite' width={['95vw', '390px']} fontSize='20px' my={1}>
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
        </Card>
        <div>
          {orderList.length !== 0 && (
            <Link to='/Sweet-for-happiness/checkout'>Confirm Order</Link>
          )}
        </div>
      </Flex>
    </div>
  );
};

Checkout.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledCheckout = styled(Checkout)`
  .colorful {
    div {
    }
  }
`;

StyledCheckout.displayName = 'Checkout';

export default StyledCheckout;
