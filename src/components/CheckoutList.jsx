import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';

const CheckoutList = ({ title, qty, total }) => {
  return (
    <StyledFlex>
      <div>{title}</div>
      <div>{qty}</div>
      <div>{`€ ${total}`}</div>
    </StyledFlex>
  );
};

CheckoutList.propTypes = {
  title: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  total: PropTypes.string.isRequired,
};

const StyledFlex = styled(Flex)`
  div {
    height: 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.greenWhite};
    &:first-child {
      width: 290px;
    }
    &:nth-child(2) {
      width: 30px;
      justify-content: flex-end;
    }
    &:nth-child(3) {
      width: 70px;
      justify-content: flex-end;
    }
    &:nth-child(odd) {
      background-color: ${props => props.theme.colors.orange};
      color: ${props => props.theme.colors.green};
    }

    &:nth-child(even) {
      background-color: ${props => props.theme.colors.green};
      color: ${props => props.theme.colors.orange};
    }
  }
`;

export default CheckoutList;
