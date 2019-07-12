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
          <Flex className='wide' pl='10px'>
            Category
          </Flex>
          <div className='wider'>Name</div>
          <div>Price</div>
          <div>Amount</div>
          <Flex justifyContent='center'>Enabled</Flex>
          <Flex justifyContent='center'>Edit</Flex>
          <Flex justifyContent='center'>Delete</Flex>
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
  margin-bottom: 30px;
  padding-right: 4px;
  width: 100%;

  .add-new-porduct {
    &:hover {
      font-weight: 700;
      border: 1px solid ${props => props.theme.colors.green};
      cursor: pointer;
    }
  }
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

StyledDashProduct.displayName = 'DashProduct';

export default StyledDashProduct;
