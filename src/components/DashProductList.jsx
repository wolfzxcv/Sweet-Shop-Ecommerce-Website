import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { SharedContext } from '../contexts/SharedContext';

const DashProductList = ({
  className,
  id,
  category,
  title,
  price,
  isEnabled,
  amount,
}) => {
  const { correctProduct, deleteProduct } = useContext(SharedContext);

  return (
    <Flex
      className={className}
      width='900px'
      justifyContent='space-between'
      alignItems='center'
    >
      <div className='wide'>{category}</div>
      <div className='wider'>{title}</div>
      <div>{price}</div>
      <div>{amount}</div>
      <div>{isEnabled === '0' ? 'NO' : 'YES'}</div>
      <div
        onClick={() => correctProduct(id)}
        onKeyDown={correctProduct}
        role='button'
        tabIndex='0'
      >
        Edit
      </div>
      <div
        onClick={() => deleteProduct(id)}
        onKeyDown={deleteProduct}
        role='button'
        tabIndex='0'
      >
        Delete
      </div>
    </Flex>
  );
};

DashProductList.propTypes = {
  className: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  isEnabled: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const StyledDashProductList = styled(DashProductList)`
  border: 1px solid ${props => props.theme.colors.greenWhite};
  background-color: ${props => props.theme.colors.orange};
  font-size: 18px;
  display: flex;
  &:hover {
    background-color: ${props => props.theme.colors.greenWhite};
  }

  div {
    padding-left: 5px;
    border-right: 1px solid ${props => props.theme.colors.greenWhite};
    line-height: 3;
  }

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
