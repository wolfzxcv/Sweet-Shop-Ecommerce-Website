import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Login = ({ className }) => {
  return (
    <div className={className}>
      Login
    </div>
  )
}

Login.propTypes = {
  className: PropTypes.string,
};

const StyledLogin = styled(Login)`

`;

StyledLogin.displayName = 'Login';

export default StyledLogin;
