import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
//import DashProductList from './DashProductList';
//import { SharedContext } from '../contexts/SharedContext';

const DashContent = ({ className }) => {
  // const { product, setProduct } = useContext(SharedContext);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/admin/products`
      )
      .then(result => console.log(result.data));
  }, []);

  return (
    <div className={className}>
      <button>Add new porduct</button>
      <div>
        {/* {product.map(item => (
          <DashProductList
            key={item.id}
            id={item.id}
            title={item.product}
            category={item.category}
            origPrice={item.origin_price}
            price={item.price}
            imageUrl={item.imageUrl}
            isEnabled={item.is_enabled}
            content={item.content}
            description={item.description}
          />
        ))} */}
      </div>
    </div>
  );
};

DashContent.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledDashContent = styled(DashContent)``;

StyledDashContent.displayName = 'DashContent';

export default StyledDashContent;
