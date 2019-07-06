import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DashSidebar = ({ className }) => {
  return (
    <div className={className}>
      <div>Product list</div>
      <div>Order list</div>
      <div>Coupon</div>
      <div>Mock list</div>
    </div>
  );
};

DashSidebar.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledDashSidebar = styled(DashSidebar)`
  div {
    padding-left: 8px;
    height: 65px;
    line-height: 2;
    font-family: 'Shadows Into Light', cursive;
    font-size: 24px;
    border: 1px solid ${props => props.theme.colors.greenWhite};
    display: flex;
    align-items: center;
    &:hover {
      background-color: ${props => props.theme.colors.greenWhite};
      cursor: pointer;
    }
  }
`;

StyledDashSidebar.displayName = 'DashSidebar';

export default StyledDashSidebar;
