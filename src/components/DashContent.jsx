import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
//import { Flex, Box, Text } from 'rebass';
import DashProductList from './DashProductList';
import DashAddNewProduct from './DashAddNewProduct';
import { SharedContext } from '../contexts/SharedContext';

const DashContent = ({ className }) => {
  const { product, setProduct } = useContext(SharedContext);

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
    <div className={className}>
      <button type='button'>Add new porduct</button>
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
  );
};

DashContent.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledDashContent = styled(DashContent)`
  div {
    border: 1px solid red;
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
