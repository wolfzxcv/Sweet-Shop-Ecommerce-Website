import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DashProductList = ({ className }) => {
  return <div className={className}>111</div>;
};

DashProductList.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledDashProductList = styled(DashProductList)``;

StyledDashProductList.displayName = 'DashProductList';

export default StyledDashProductList;
