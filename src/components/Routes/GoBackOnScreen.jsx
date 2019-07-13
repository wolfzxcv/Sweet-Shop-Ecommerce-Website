import React from 'react';

// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const GoBackOnScreen = () => {
  return (
    <StyledCartButton onClick={() => window.history.back()}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </StyledCartButton>
  );
};

const StyledCartButton = styled.div`
  transition: 0.4s all;
  padding-top: 10px;
  border: 1px solid ${props => props.theme.colors.greenWhite};
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
  background: ${props => props.theme.colors.green};
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  position: fixed;
  text-align: center;
  z-index: 500;
  right: 30px;
  &:hover {
    cursor: pointer;
  }

  @media (min-width: 769px) {
    width: 80px;
    height: 60px;
    font-size: 46px;
    top: 30%;
    &:hover {
      transform: scale(1.3);
    }
  }

  @media (max-width: 768px) {
    width: 64px;
    height: 48px;
    font-size: 36px;
    top: 100px;
    &:hover {
      background: ${props => props.theme.colors.orange};
    }
  }
`;

export default GoBackOnScreen;
