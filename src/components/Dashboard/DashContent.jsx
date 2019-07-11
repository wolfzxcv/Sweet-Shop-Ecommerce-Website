import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ModalProvider } from 'styled-react-modal';
import { Button, Flex } from 'rebass';
import DashProductList from './DashProductList';
import DashAddNewProduct from './DashAddNewProduct';
import { SharedContext } from '../../contexts/SharedContext';

const DashContent = ({ className }) => {
  const { getAllProduct, setIsModalOpen, product } = useContext(SharedContext);

  useEffect(() => {
    getAllProduct();
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
          onClick={() => setIsModalOpen(true)}
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

        <div className='product-list'>
          {product.map(item => (
            <DashProductList
              key={item.id}
              id={item.id}
              category={item.category}
              title={item.title}
              price={item.price}
              isEnabled={item.is_enabled.toString()}
              amount={item.unit}
            />
          ))}
        </div>
        <Flex mt={2} justifyContent='flex-end'>
          {`${product.length} products in total.`}
        </Flex>
        <DashAddNewProduct />
      </div>
    </ModalProvider>
  );
};

DashContent.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledDashContent = styled(DashContent)`
  margin: 0 auto;
  margin-bottom: 30px;
  .product-list {
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

StyledDashContent.displayName = 'DashContent';

export default StyledDashContent;
