import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { SharedContext } from '../../../contexts/SharedContext';

const DashOrderList = ({ id, create_at, email, total, is_paid }) => {
  const { editProduct, deleteProduct } = useContext(SharedContext);

  return (
    <StyledFlex
      width='900px'
      justifyContent='space-between'
      alignItems='center'
    >
      <div className='wide'>{create_at}</div>
      <div className='wider'>{email}</div>

      <Flex justifyContent='flex-end'>{total}</Flex>
      <Flex className='enabled' justifyContent='center'>
        {is_paid === 'false' ? 'NO' : 'YES'}
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
    </StyledFlex>
  );
};

DashOrderList.propTypes = {
  id: PropTypes.string.isRequired,
  create_at: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  is_paid: PropTypes.bool.isRequired,
};

const StyledFlex = styled(Flex)`
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
    flex: 2;
  }
  .wider {
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
      cursor: pointer;
      color: ${props => props.theme.colors.orange};
      background-color: ${props => props.theme.colors.green};
    }
  }
`;

export default DashOrderList;
