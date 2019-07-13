import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ModalProvider } from 'styled-react-modal';
import { Flex } from 'rebass';
import DashOrderList from './DashOrderList';
import DashOrderModal from './DashOrderModal';
import { SharedContext } from '../../../contexts/SharedContext';

const DashOrder = ({ className }) => {
  const { getOrders, orders } = useContext(SharedContext);

  useEffect(() => {
    getOrders();
  }, []);
  return (
    <ModalProvider>
      <div className={className}>
        <div className='table-head'>
          <Flex className='wide' pl='10px'>
            Created at
          </Flex>
          <Flex className='wide'>Name</Flex>
          <div className='wider'>E-mail</div>
          <Flex className='wide'>Tel</Flex>
          <Flex justifyContent='center'>Price</Flex>
          <Flex justifyContent='center'>Paid</Flex>
          <Flex justifyContent='center'>Edit</Flex>
        </div>

        <div className='order-list'>
          {orders.map(order => (
            <DashOrderList
              key={order.id}
              id={order.id}
              create_at={order.create_at}
              name={order.user.name}
              email={order.user.email}
              tel={order.user.tel}
              total={order.total}
              is_paid={order.is_paid}
            />
          ))}
        </div>

        <DashOrderModal />
      </div>
    </ModalProvider>
  );
};

DashOrder.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledDashOrder = styled(DashOrder)`
  margin-top: 42px;
  margin-bottom: 30px;
  padding: 0 14px 0 10px;
  width: 100%;

  .table-head {
    line-height: 3;
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.orange};
    display: flex;
    justify-content: center;
    .wide {
      padding-left: 10px;
      flex: 2;
    }
    .wider {
      padding-left: 10px;
      flex: 5;
    }
    div {
      flex: 1;
    }
  }
`;

StyledDashOrder.displayName = 'DashOrder';

export default StyledDashOrder;
