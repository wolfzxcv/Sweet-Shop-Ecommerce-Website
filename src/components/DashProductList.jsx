import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

const DashProductList = ({
  className,
  id,
  category,
  title,
  price,
  isEnabled,
}) => {
  return (
    <Flex className={className} width='900px'>
      <div className='wide'>{category}</div>
      <div className='wider'>{title}</div>
      <div>{price}</div>
      <div>{isEnabled}</div>
      <div id={id}>Edit</div>
      <div id={id}>Delete</div>
    </Flex>
  );
};

DashProductList.propTypes = {
  className: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isEnabled: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

const StyledDashProductList = styled(DashProductList)`
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
`;

StyledDashProductList.displayName = 'DashProductList';

export default StyledDashProductList;
