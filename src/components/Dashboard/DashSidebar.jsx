import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DashSidebar = ({ className }) => {
  return (
    <div className={className}>
      <Link to='/Sweet-for-happiness/dashboard'>
        <div>Product list</div>
      </Link>
      <Link to='/Sweet-for-happiness/dashboard/order'>
        <div>Order list</div>
      </Link>
      <div>Coupon</div>

      <div>Back Home</div>
    </div>
  );
};

DashSidebar.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledDashSidebar = styled(DashSidebar)`
  margin-top: 4px;
  div {
    padding: 0 8px 0 8px;
    height: 65px;
    line-height: 2;
    font-family: 'Shadows Into Light', cursive;
    font-size: 24px;
    border-top: 1px solid ${props => props.theme.colors.greenWhite};
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.green};
    display: flex;
    align-items: center;
    &:hover {
      color: ${props => props.theme.colors.green};
      background-color: ${props => props.theme.colors.greenWhite};
      cursor: pointer;
    }
  }
`;

StyledDashSidebar.displayName = 'DashSidebar';

export default StyledDashSidebar;
