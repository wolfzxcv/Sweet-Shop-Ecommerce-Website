import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Flex, Box, Text } from 'rebass';
import DashSidebar from './DashSidebar';
import DashProduct from './Products/DashProduct';
import DashOrder from './Orders/DashOrder';
import { SharedContext } from '../../contexts/SharedContext';

const Dashboard = ({ className }) => {
  const { user, handleLogout, checkIfLogin, isLogin } = useContext(
    SharedContext
  );
  useEffect(() => {
    checkIfLogin();
    console.log('isLogin ', isLogin);
  }, []);

  return (
    <div className={className}>
      <Router>
        <Flex pl={1} color='green' bg='orange' alignItems='center'>
          <Text fontWeight='bold'>Dashboard</Text>
          <Box mx='auto' />
          <Text
            className='button'
            p={1}
            width='80px'
            color='white'
            bg='green'
            onClick={() => {
              handleLogout(user);
            }}
          >
            <Flex justifyContent='center'> Log out </Flex>
          </Text>
        </Flex>

        <Flex>
          <DashSidebar />
          <Route
            component={DashProduct}
            exact
            path='/Sweet-for-happiness/dashboard'
          />
          <Route
            component={DashOrder}
            path='/Sweet-for-happiness/dashboard/order'
          />
        </Flex>
      </Router>
    </div>
  );
};

Dashboard.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledDashboard = styled(Dashboard)`
  .button {
    height: 28px;
    &:hover {
      background-color: ${props => props.theme.colors.greenWhite};
      color: ${props => props.theme.colors.green};
      cursor: pointer;
    }
  }
`;

StyledDashboard.displayName = 'Dashboard';

export default StyledDashboard;
