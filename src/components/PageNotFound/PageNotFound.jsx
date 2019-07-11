import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import backgroundImage from '../../images/photo-1505935428862-770b6f24f629.jpg';

const PageNotFound = ({ className }) => {
  return (
    <div className={className}>
      <div>404 Page Not Found</div>
    </div>
  );
};

PageNotFound.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledPageNotFound = styled(PageNotFound)`
  margin: 0 auto;
  background-image: url(${backgroundImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    font-family: 'Shadows Into Light', cursive;
    font-weight: 700;
  }

  @media (min-width: 769px) {
    width: 1024px;
    height: 496px;
    div {
      letter-spacing: 6px;
      font-size: 72px;
    }
  }

  @media (max-width: 768px) {
    height: 328px;
    div {
      letter-spacing: 3px;
      font-size: 48px;
    }
  }
`;
StyledPageNotFound.displayName = 'PageNotFound';

export default StyledPageNotFound;
