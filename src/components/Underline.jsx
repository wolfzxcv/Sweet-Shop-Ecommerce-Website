import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Underline = ({ className }) => {
  return <div className={className} />;
};

Underline.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledUnderline = styled(Underline)`
  width: 92%;
  border: 1px solid ${props => props.theme.colors.greenWhite};
`;

StyledUnderline.displayName = 'Underline';

export default StyledUnderline;
