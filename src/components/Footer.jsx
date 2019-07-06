import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import lightLogo from '../svg/logo-light.svg';
import goodDay from '../svg/sm-今天是個吃甜點的好日子.svg';
import logoDark from '../svg/logotype-lg-dark.svg';
import icFacebook from '../svg/ic-facebook.svg';
import icLine from '../svg/ic-line@.svg';

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <div className='mail'>
        <div className='mail-left'>
          <div className='img' />
          <div>subscribe our email</div>
        </div>
        <div className='mail-right'>
          <div className='envelope'>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <input type='text' />
          <div className='send'>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='footer-left'>
          <div className='logotype-lg-dark'>
            <img src={logoDark} alt='logo' />
          </div>
          <div>
            <div>+353-87-654-3210</div>
            <div>dontsendmemail@email.com</div>
            <div>400 Taichung, Taiwan(R.O.C)</div>
          </div>
          <div className='icons'>
            <div>
              <img src={icFacebook} alt='ic-facebook' />
            </div>
            <div>
              <img src={icLine} alt='ic-lineo' />
            </div>
          </div>
        </div>
        <div className='footer-right'>
          <div className='good-day' />
          <div className='copyright'>© 2019 Sweetaste* All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledFooter = styled(Footer)`
  .mail {
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.greenWhite};
    font-size: 24px;
    font-family: 'Shadows Into Light', cursive;
    letter-spacing: 5px;
    font-weight: 700;
    display: flex;

    .mail-left {
      display: flex;
      align-items: center;
      .img {
        margin-right: 20px;
        width: 40px;
        height: 40px;
        background-image: url(${lightLogo});
        background-repeat: no-repeat;
      }
    }
    .mail-right {
      height: 56px;
      display: flex;
      color: ${props => props.theme.colors.green};
      .envelope {
        margin: 0;
        padding: 0;
        width: 64px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.colors.greenWhite};
        &:hover {
          cursor: pointer;
        }
      }

      input {
        margin: 0;
        padding: 0;
        width: 252px;
        height: 100%;
        border: 0px solid;
        background-color: ${props => props.theme.colors.greenWhite};
        &:focus {
          outline: none;
        }
      }
      .send {
        margin: 0;
        padding: 0;
        width: 64px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${props => props.theme.colors.orange};
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .footer {
    margin: 0;
    background-color: ${props => props.theme.colors.greenWhite};
    display: flex;
    .footer-left {
      width: 50%;

      .icons {
        display: flex;
        div {
          padding-right: 8px;
          width: 40px;
          height: 40px;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  @media (min-width: 769px) {
    .mail {
      padding: 5px 122px;
      height: 116px;
      justify-content: space-between;
      align-items: center;
      .mail-right {
        justify-content: flex-end;
      }
    }

    .footer {
      padding: 0 122px;
      height: 341px;
      justify-content: space-between;

      .logotype-lg-dark {
        margin: 39px 0 115px 0;
        width: 171px;
        height: 26px;
      }

      .icons {
        padding: 30px 0;
      }

      .footer-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .good-day {
          margin: 30px 0 46px 0;
          width: 60px;
          height: 219px;
          background-image: url(${goodDay});
          background-repeat: no-repeat;
        }
        .copyright {
          margin-bottom: 30px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .mail {
      padding: 30px;
      height: 186px;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }

    .footer {
      padding-left: 30px;
      height: 311px;
      flex-direction: column;
      align-items: flex-start;
      .logotype-lg-dark {
        margin: 39px 0;
        width: 171px;
        height: 26px;
      }

      .icons {
        padding: 50px 0 20px 0;
      }

      .good-day {
        display: none;
      }
    }
  }
`;

StyledFooter.displayName = 'Footer';

export default StyledFooter;
