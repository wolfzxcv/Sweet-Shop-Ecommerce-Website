import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { SharedContext } from '../../../contexts/SharedContext';

const DashProductList = ({
  className,
  id,
  category,
  title,
  price,
  isEnabled,
  amount,
}) => {
  const { editProduct, deleteProduct } = useContext(SharedContext);

  return (
    <Flex
      className={className}
      width='900px'
      justifyContent='space-between'
      alignItems='center'
    >
      <div className='wide'>{category}</div>
      <div className='wider'>{title}</div>

      <Flex justifyContent='flex-end'>{price}</Flex>

      <Flex justifyContent='flex-end'>{amount}</Flex>

      <Flex className='enabled' justifyContent='center'>
        {isEnabled === '0' ? 'NO' : 'YES'}
      </Flex>
      <Flex
        className='add-hover'
        justifyContent='center'
        onClick={() => editProduct(id)}
        onKeyDown={editProduct}
        role='button'
        tabIndex='0'
      >
        Edit
      </Flex>
      <Flex
        className='add-hover'
        justifyContent='center'
        onClick={() => deleteProduct(id)}
        onKeyDown={deleteProduct}
        role='button'
        tabIndex='0'
      >
        Delete
      </Flex>
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
  padding-right: 4px;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.greenWhite};
  font-size: 18px;
  display: flex;
  &:hover {
    background-color: ${props => props.theme.colors.greenWhite};
  }

  div {
    padding: 0 6px 0 6px;
    line-height: 3;
    border-left: 1px solid ${props => props.theme.colors.greenWhite};
  }

  .wide {
    padding-left: 10px;
    flex: 2;
  }
  .wider {
    padding-left: 10px;
    flex: 5;
  }
  div {
    flex: 1;
  }

  .enabled {
    color: ${props => (props.isEnabled === '0' ? 'red' : 'green')};
  }

  .add-hover {
    &:hover {
      cursor: crosshair;
      color: ${props => props.theme.colors.orange};
      background-color: ${props => props.theme.colors.green};
    }
  }
`;

StyledDashProductList.displayName = 'DashProductList';

export default StyledDashProductList;
