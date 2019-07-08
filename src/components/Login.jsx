import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { SharedContext } from '../contexts/SharedContext';
import icFacebook from '../svg/ic-facebook-logotype.svg';
import icGoogle from '../svg/ic-google.svg';
import icYahoo from '../svg/ic-yahoo.svg';

const Login = ({ className }) => {
  const { user, setUser, isLogin, handleLogin, checkIfLogin } = useContext(
    SharedContext
  );

  if (isLogin) {
    return <Redirect to='/dashboard' />;
  } else {
    checkIfLogin();
  }

  return (
    <div className={className}>
      <div className='login'>
        <div className='title'>This is for admin sign in only</div>
        <form onSubmit={e => e.preventDefault() && false}>
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

      <div className='socialmedia'>
        <div>
          <img src={icFacebook} alt='ic-facebook' />
        </div>
        <div>
          <img src={icGoogle} alt='ic-google' />
        </div>
        <div>
          <img src={icYahoo} alt='ic-yahoo' />
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  className: PropTypes.string.isRequired,
};

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

  @media (min-width: 769px) {
    margin: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .socialmedia {
      width: 390px;
      height: 350px;
      background-color: ${props => props.theme.colors.greenWhite};
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      div {
        width: 330px;
        height: 56px;
        background-color: ${props => props.theme.colors.white};
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          cursor: pointer;
          background-color: ${props => props.theme.colors.orange};
        }
      }
      img {
        width: 108px;
        height: 21px;
      }
    }
  }

  @media (max-width: 768px) {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .socialmedia {
      width: 390px;
      height: 116px;
      background-color: ${props => props.theme.colors.greenWhite};
      display: flex;
      justify-content: center;
      align-items: center;
      order: -1;
      div {
        width: 105px;
        height: 56px;
        background-color: ${props => props.theme.colors.white};
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          cursor: pointer;
          background-color: ${props => props.theme.colors.orange};
        }
      }
      img {
        width: 83px;
        height: 16px;
      }
    }
  }
`;

StyledLogin.displayName = 'Login';

export default StyledLogin;
