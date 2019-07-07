import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ModalProvider } from 'styled-react-modal';
import { Button } from 'rebass';
import DashProductList from './DashProductList';
import DashAddNewProduct from './DashAddNewProduct';
import { SharedContext } from '../contexts/SharedContext';

const DashContent = ({ className }) => {
  const { setIsModalOpen, product, setProduct } = useContext(SharedContext);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/admin/products`
      )
      .then(result => setProduct(result.data.products));
  }, [setProduct]);
  console.log(product);
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
          <div>Enabled</div>
          <div>Edit</div>
          <div>Delete</div>
        </div>

        <div>
          {product.map(item => (
            <DashProductList
              key={item.id}
              id={item.id}
              category={item.category}
              title={item.title}
              price={item.price}
              isEnabled={item.is_enabled}
            />
          ))}
        </div>

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
  div {
    border: 1px solid red;
  }
  .add-new-porduct {
    &:hover {
      font-weight: 700;
      border: 1px solid ${props => props.theme.colors.green};
      cursor: pointer;
    }
  }
  .table-head {
    display: flex;
    justify-content: space-between;
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

StyledDashContent.displayName = 'DashContent';

export default StyledDashContent;
