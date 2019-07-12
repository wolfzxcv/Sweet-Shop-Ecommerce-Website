import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ModalProvider } from 'styled-react-modal';
import { Flex } from 'rebass';
import DashOrderList from './DashOrderList';
// import DashProductModal from './DashProductModal';
import { SharedContext } from '../../../contexts/SharedContext';

const DashOrder = ({ className }) => {
  const { getOrders, orders } = useContext(SharedContext);

  useEffect(() => {
    console.log('object');
    getOrders();
  }, []);
  return (
    <ModalProvider>
      <div className={className}>
        <div className='table-head'>
          <Flex className='wide' pl='10px'>
            Category
          </Flex>
          <div className='wider'>E-mail</div>
          <div>Price</div>
          <div>Paid</div>
          <div>Edit</div>
          <div>Delete</div>
        </div>

        <div className='order-list'>
          {orders.map(order => (
            <DashOrderList
              key={order.id}
              id={order.id}
              create_at={order.create_at}
              email={order.user.email}
              total={order.total}
              is_paid={order.is_paid}
            />
          ))}
        </div>

        {/* <DashOrderModal /> */}
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
  padding-right: 4px;
  width: 100%;

  .table-head {
    line-height: 3;
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.orange};
    display: flex;
    justify-content: center;
    .wide {
      flex: 2;
    }
    .wider {
      flex: 5;
    }
    div {
      flex: 1;
    }
  }
`;

StyledDashOrder.displayName = 'DashOrder';

export default StyledDashOrder;
