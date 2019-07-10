import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { LinkedinSquare } from 'styled-icons/boxicons-logos/LinkedinSquare';
import { Github } from 'styled-icons/boxicons-logos/Github';
import { Instagram } from 'styled-icons/boxicons-logos/Instagram';
import { SharedContext } from '../contexts/SharedContext';

const Login = ({ className }) => {
  const {
    isLaptop,
    user,
    setUser,
    isLogin,
    handleLogin,
    checkIfLogin,
  } = useContext(SharedContext);

  if (isLogin) {
    return <Redirect to='/Sweet-for-happiness/dashboard' />;
  } else {
    checkIfLogin();
  }

  return (
    <div className={className}>
      <div className='login'>
        <div className='title'>This is for admin sign in only</div>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleLogin(user);
          }}
        >
          <div className='urmail'>
            <div>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <input
              type='email'
              placeholder='your email'
              onChange={e => setUser({ ...user, username: e.target.value })}
            />
          </div>

          <div className='urpassword'>
            <div>
              <FontAwesomeIcon icon={faKey} />
            </div>
            <input
              type='password'
              placeholder='your password'
              onChange={e => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className='remember'>
            <input type='checkbox' value='forget me' />
            forget me
          </div>

          <button type='submit' onClick={() => handleLogin(user)}>
            Sign in
          </button>
        </form>
      </div>

      <StyledFlex>
        <Box width={['105px', '330px']} bg={['', 'white']}>
          <a
            href='https://www.linkedin.com/in/nien-ying-chou-169604186/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Flex justifyContent='center'>
              <div className='icon'>
                <LinkedinSquare />
              </div>
              {isLaptop && <div>LinkedIn</div>}
            </Flex>
          </a>
        </Box>

        <Box width={['105px', '330px']} bg={['', 'white']}>
          <a
            href='https://github.com/wolfzxcv'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Flex justifyContent='center'>
              <div className='icon'>
                <Github />
              </div>
              {isLaptop && <div>GitHub</div>}
            </Flex>
          </a>
        </Box>

        <Box width={['105px', '330px']} bg={['', 'white']}>
          <a
            href='https://www.instagram.com/nienyingchou/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Flex justifyContent='center'>
              <div className='icon'>
                <Instagram />
              </div>
              {isLaptop && <div>Instagram</div>}
            </Flex>
          </a>
        </Box>
      </StyledFlex>
    </div>
  );
};

Login.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledFlex = styled.div`
  width: 390px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${props => props.theme.colors.greenWhite};
  div {
    transition: 0.5s all;
    &:hover {
      transform: scale(1.2);
    }
  }
  @media (min-width: 769px) {
    padding: 20px;
    font-size: 26px;
    height: 330px;
    flex-direction: column;
    div {
      line-height: 2.2;
    }
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    order: -1;
    font-size: 30px;
    height: 100px;
  }
`;

const StyledLogin = styled(Login)`
  .title {
    padding: 0;
    font-size: 24px;
    width: 100%;
    height: 65px;
    background-color: ${props => props.theme.colors.orange};
    color: ${props => props.theme.colors.green};
    font-weight: 600;
    font-family: 'Shadows Into Light', cursive;
    letter-spacing: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    padding: 40px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 390px;
    height: 280px;
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.greenWhite};

    .urmail,
    .urpassword {
      display: flex;
      height: 56px;
      background-color: ${props => props.theme.colors.greenWhite};
      div {
        width: 64px;
        height: 100%;
        color: ${props => props.theme.colors.green};
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      input {
        width: 266px;
        border: 0px solid;
        font-size: 16px;
        background-color: ${props => props.theme.colors.greenWhite};
        &:focus {
          outline: none;
        }
      }
    }

    .remember {
      width: 330px;
      font-size: 16px;
    }
    button {
      padding: 0;
      border: 1px solid ${props => props.theme.colors.orange};
      font-size: 24px;
      width: 100%;
      height: 65px;
      background-color: ${props => props.theme.colors.orange};
      color: ${props => props.theme.colors.green};
      &:hover {
        cursor: pointer;
      }
    }
  }

  .icon {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 769px) {
    margin: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      margin-right: 20px;
    }
  }

  @media (max-width: 768px) {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

StyledLogin.displayName = 'Login';

export default StyledLogin;
