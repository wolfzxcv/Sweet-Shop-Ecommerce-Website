import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ModalProvider } from 'styled-react-modal';
import { Button, Flex } from 'rebass';
import DashProductList from './DashProductList';
import DashProductModal from './DashProductModal';
import { SharedContext } from '../../../contexts/SharedContext';

const DashProduct = ({ className }) => {
  const { getAllProducts, setIsModalOpen, products } = useContext(
    SharedContext
  );

  useEffect(() => {
    getAllProducts();
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

        <div>
          {products.map(product => (
            <DashProductList
              key={product.id}
              id={product.id}
              category={product.category}
              title={product.title}
              price={product.price}
              isEnabled={product.is_enabled.toString()}
              amount={product.unit}
            />
          ))}
        </div>
        <Flex mt={2} justifyContent='flex-end'>
          {`${products.length} products in total.`}
        </Flex>
        <DashProductModal />
      </div>
    </ModalProvider>
  );
};

DashProduct.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledDashProduct = styled(DashProduct)`
  margin: 0 auto;
  margin-bottom: 30px;

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

StyledDashProduct.displayName = 'DashProduct';

export default StyledDashProduct;
