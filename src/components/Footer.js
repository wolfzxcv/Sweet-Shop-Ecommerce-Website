import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import lightLogo from '../svg/logo-light.svg'
import goodDay from '../svg/sm-今天是個吃甜點的好日子.svg'

const Footer = ({ className }) => {
  return (
    <footer className={className}>

      <div className="mail">
        <div className="mail-left">
          <div className='img'></div>
          <div>subscribe our email</div>
        </div>
        <div className="mail-right">
          <div className='envelope'><FontAwesomeIcon icon={faEnvelope} /></div>
          <input type="text" />
          <div className='send'><FontAwesomeIcon icon={faArrowRight} /></div>
        </div>
      </div>

      <div className='footer'>
        <div className='footer-left'>
          <div className='logotype-lg-dark'><img src={require('../svg/logotype-lg-dark.svg')} alt="logo" /></div>
          <div>
            <div>+353-87-654-3210</div>
            <div>dontsendmemail@email.com</div>
            <div>400 Taichung, Taiwan(R.O.C)</div>
          </div>
          <div className='icons'>
            <div><img src={require('../svg/ic-facebook.svg')} alt="ic-facebook" /></div>
            <div><img src={require('../svg/ic-line@.svg')} alt="ic-lineo" /></div>
          </div>
        </div>
        <div className='footer-right'>
          <div className="good-day"></div>
          <div className="copyright">© 2019 Sweetaste* All Rights Reserved</div>
        </div>

      </div>
    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
};

const StyledFooter = styled(Footer)`

.mail{
  padding: 5px 122px;
  height: 116px;
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.greenWhite};
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .mail-left{
    display: flex;
    align-items: center;
    .img{
      margin-right: 20px;
      width: 40px;
      height: 40px;
      background-image: url(${lightLogo});
    }
  }
  .mail-right{
    height: 56px;
    display: flex;
    justify-content: flex-end;
    color: ${props => props.theme.colors.green};
    .envelope{
      margin: 0;
      padding: 0;
      width: 64px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;  
      background-color: ${props => props.theme.colors.greenWhite};
      &:hover{
        cursor: pointer;
      }
    }

    input{
      margin: 0;
      padding: 0;
      width: 252px;
      height: 100%;
      border: 0px solid;
      background-color: ${props => props.theme.colors.greenWhite};
      &:focus {
        outline:none;
      }
    }
    .send{
      margin: 0;
      padding: 0;
      width: 64px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${props => props.theme.colors.orange};
      &:hover{
        cursor: pointer;
      }
    }
  }
}

.footer{
margin: 0;
padding: 0 122px;
height: 341px;
background-color: ${props => props.theme.colors.greenWhite};
display: flex;
justify-content: space-between;
  .footer-left{
    width: 50%;
    .logotype-lg-dark{
      margin: 39px 0 115px 0;
      width: 171px;
      height: 26px;
    }
    
    .icons{
      padding: 30px 0;
      display: flex;
      div{
        padding-right: 8px;
        width: 40px;
        height: 40px;
        &:hover{
          cursor: pointer;
        }
      }
    }
  }

  .footer-right{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .good-day{
      margin: 30px 0 46px 0;
      width: 60px;
      height:219px;
      background-image: url(${goodDay});
      background-repeat: no-repeat;
    }
    .copyright{
      margin-bottom: 30px
    }
  }
}
`;

StyledFooter.displayName = 'Footer';

export default StyledFooter;
