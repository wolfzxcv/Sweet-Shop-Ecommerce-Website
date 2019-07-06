import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DashContent = ({ className }) => {
  return (
    <div className={className}>
      <button>Add new porduct</button>
      <div>list</div>
    </div>
  );
};

DashContent.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledDashContent = styled(DashContent)``;

StyledDashContent.displayName = 'DashContent';

export default StyledDashContent;
