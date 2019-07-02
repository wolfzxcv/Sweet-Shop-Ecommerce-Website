import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Login = ({ className }) => {
  return <div className={className}>Login</div>;
};

Login.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledLogin = styled(Login)`
  font-size: 1rem;
`;

StyledLogin.displayName = 'Login';

export default StyledLogin;
