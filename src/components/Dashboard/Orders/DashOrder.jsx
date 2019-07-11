import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ModalProvider } from 'styled-react-modal';
import { Button, Flex } from 'rebass';
import DashOrderList from './DashOrderList';
// import DashProductModal from './DashProductModal';
import { SharedContext } from '../../../contexts/SharedContext';

const DashOrder = ({ className }) => {
  const { getAllOrders, orders } = useContext(SharedContext);

  useEffect(() => {
    console.log('object');
    getAllOrders();
  }, []);
  return (
    <ModalProvider>
      <div className={className}>
        <Button
          className='add-new-porduct'
          type='button'
          width='100%'
          m={1}
          mx='auto'
          color='green'
          bg='greenWhite'
          // onClick={() => setIsModalOpen(true)}
        >
          Add new porduct
        </Button>
        <div className='table-head'>
          <div className='wide'>Category</div>
          <div className='wider'>Name</div>
          <div>Price</div>
          <div>Amount</div>
          <div>Enabled</div>
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
              paid_date={order.paid_date}
            />
          ))}
        </div>
        <Flex mt={2} justifyContent='flex-end'>
          {`${orders.length} orders in total.`}
        </Flex>
        {/* <DashOrderModal /> */}
      </div>
    </ModalProvider>
  );
};

DashOrder.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledDashOrder = styled(DashOrder)`
  margin: 0 auto;
  margin-bottom: 30px;
  .order-list {
  }
  .add-new-porduct {
    &:hover {
      font-weight: 700;
      border: 1px solid ${props => props.theme.colors.green};
      cursor: pointer;
    }
  }
  .table-head {
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.orange};
    display: flex;
    justify-content: space-between;
    .wide {
      padding-left: 3px;
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
