import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SharedContext } from '../contexts/SharedContext';
import DashSidebar from './DashSidebar';
import DashContent from './DashContent';

const Dashboard = ({ className }) => {
  const { user, handleLogout, checkIfLogin } = useContext(SharedContext);

  checkIfLogin();

  return (
    <div className={className}>
      <header>
        Dashboard
        <div
          role='button'
          tabIndex='0'
          onKeyDown={handleLogout}
          onClick={() => {
            handleLogout(user);
          }}
        >
          Log out
        </div>
      </header>
      <div className='content'>
        <DashSidebar className='left' />
        <DashContent className='right' />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledDashboard = styled(Dashboard)`
  header {
    padding-left: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.colors.orange};
    div {
      width: 80px;
      height: 30px;
      background-color: ${props => props.theme.colors.green};
      color: ${props => props.theme.colors.white};
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: ${props => props.theme.colors.greenWhite};
        color: ${props => props.theme.colors.green};
        cursor: pointer;
      }
    }
  }

  .content {
    display: flex;
    .left,
    .right {
      display: flex;
      flex-direction: column;
    }
    .left {
      width: 13%;
    }
    .right {
      width: 87%;
    }
  }
`;

StyledDashboard.displayName = 'Dashboard';

export default StyledDashboard;
