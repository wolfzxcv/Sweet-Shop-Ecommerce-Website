import React, { useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SharedContext } from '../contexts/SharedContext';

const ProductDetail = ({ className, match }) => {
  const { item, setItem } = useContext(SharedContext);

  React.useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = () => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/product/${match.params.id}`
      )
      .then(response => setItem(response.data.product));
  };

  return (
    <div className={className}>
      <div>{item.title}</div>
      <div>{`€ ${item.price}`}</div>
      <div>{item.description}</div>
      <div>{item.content}</div>
    </div>
  );
};

ProductDetail.propTypes = {
  className: PropTypes.string.isRequired,
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const StyledProductDetail = styled(ProductDetail)`
  div {
    border: 1px solid red;
  }
`;

StyledProductDetail.displayName = 'ProductDetail';

export default StyledProductDetail;
