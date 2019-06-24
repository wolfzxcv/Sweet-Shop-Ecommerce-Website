import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Home = ({ className }) => {
  return (
    <div className={className}>

      <div className='pic-group'>
        <div className='up-big'>

        </div>
        <div className='down-three'>
          <div>home</div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className='why-choose'>
        <div></div>
        <div></div>
      </div>

      <div className='why-eat'>
        <div></div>
        <div></div>
      </div>

      <div className='no-reason'></div>

      <div className="product">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

Home.propTypes = {
  className: PropTypes.string,
};

const StyledHome = styled(Home)`
    div{
      border: 1px solid gray;
    }
`;

StyledHome.displayName = 'Home';

export default StyledHome;
