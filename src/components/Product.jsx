import React, { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Product = ({ className }) => {
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/admin/products`
      )
      .then(result => console.log(result.data));
    // https://vue-course-api.hexschool.io/api/smash/admin/products
    // console.log(process.env.REACT_APP_API, process.env.REACT_APP_CUSTOM);
  }, []);

  const handleLogout = () => {
    axios
      .post(`${process.env.REACT_APP_API}/admin/logout`)
      .then(result => console.log(result.data));
  };

  return (
    <div className={className}>
      product
      <button type='submit' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledProduct = styled(Product)``;

StyledProduct.displayName = 'Product';

export default StyledProduct;
