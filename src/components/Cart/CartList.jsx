import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { SharedContext } from '../../contexts/SharedContext';

const CartList = ({ className, id, title, image, price, qty, total }) => {
  const { deleteCartOrder } = useContext(SharedContext);
  return (
    <div className={className}>
      <div>
        <img src={image} alt='img' />
      </div>
      <div className='items'>
        <div>{title}</div>
        <div>{`kr ${price}`}</div>
      </div>

      <Flex flexDirection={['column', 'row']} alignItems={['center', '']}>
        <div className='amount'>
          <Flex justifyContent='flex-end'>{qty}</Flex>
        </div>
        <div className='total'>
          <Flex justifyContent='flex-end'>{`kr ${total}`}</Flex>
        </div>
        <div
          className='trash'
          onClick={() => deleteCartOrder(id)}
          onKeyDown={deleteCartOrder}
          role='button'
          tabIndex='0'
        >
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </Flex>
    </div>
  );
};

CartList.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

const StyledCartList = styled(CartList)`
  @media (min-width: 769px) {
    width: 600px;
  }
  @media (max-width: 768px) {
    padding: 0 10px 0 10px;
    width: 97vw;
    .total {
      margin-top: 5px;
    }
    .trash {
      margin-top: 15px;
    }
  }

  width: 600px;
  height: 130px;
  font-size: 20px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.colors.greenWhite};

  img {
    width: 110px;
    height: 110px;
  }

  .items {
    margin-left: 10px;
    width: 250px;
  }

  .amount {
    margin-left: 20px;
    width: 20px;
  }

  .total {
    width: 100px;
  }
  .trash {
    margin-left: 20px;
  }

  .trash {
    transition: 0.5s all;
    &:hover {
      cursor: pointer;
      &:hover {
        transform: scale(1.3);
      }
    }
  }
`;

StyledCartList.displayName = 'CartList';

export default StyledCartList;
