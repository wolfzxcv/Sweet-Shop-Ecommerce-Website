import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { SharedContext } from '../../../contexts/SharedContext';

const DashOrderList = ({
  className,
  id,
  create_at,
  name,
  email,
  tel,
  total,
  is_paid,
}) => {
  const { editOrederDetail } = useContext(SharedContext);

  const time = new Date(create_at * 1000);
  return (
    <Flex
      className={className}
      width='900px'
      justifyContent='space-between'
      alignItems='center'
    >
      <div className='wide'>{time.toLocaleString()}</div>
      <div className='wide'>{name}</div>
      <div className='wider'>{email}</div>
      <div className='wide'>{tel}</div>

      <Flex justifyContent='flex-end'>{total}</Flex>
      <Flex className='paid' justifyContent='center'>
        {is_paid === 'false' ? 'NO' : 'YES'}
      </Flex>

      <Flex
        className='add-hover'
        justifyContent='center'
        onClick={() => editOrederDetail(id)}
        onKeyDown={editOrederDetail}
        role='button'
        tabIndex='0'
      >
        Edit
      </Flex>
    </Flex>
  );
};

DashOrderList.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  create_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  is_paid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
};

const StyledDashOrderList = styled(DashOrderList)`
  padding: 0 14px 0 10px;
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
    &:not(:first-child) {
      border-left: 1px solid ${props => props.theme.colors.greenWhite};
    }
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

  .paid {
    color: ${props => (props.is_paid === 'false' ? 'red' : 'green')};
  }

  .add-hover {
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors.orange};
      background-color: ${props => props.theme.colors.green};
    }
  }
`;

StyledDashOrderList.displayName = 'DashOrderList';

export default StyledDashOrderList;
