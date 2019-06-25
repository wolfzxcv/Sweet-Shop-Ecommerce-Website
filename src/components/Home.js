import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import background01 from '../images/photo-1473256599800-b48c7c88cd7e.jpg';
import background05 from '../images/photo-1519730722595-a5ff788dea4d.jpg';
import background06 from '../svg/lg-為什麼選擇了做甜點.svg';
import background07 from '../svg/lg-為什麼一定要吃甜點.svg';
import background08 from '../images/photo-1501432781167-c0ccfd492297.jpg';

const Home = ({ className }) => {
  return (
    <div className={className}>

      <div className='pic-group'>
        <div className='up-big'>
        </div>
        <div className='down-three'>
          <div className='left'>
            <img src={require('../images/photo-1499635842761-4f1f28fafcff.jpg')} alt="background02" />
            <div className='left-overlay'><span>Daily Select</span></div>
          </div>

          <div className='middle'>
            <img src={require('../images/photo-1504114133367-631ecd3db3ca.jpg')} alt="background03" />
            <div className='middle-overlay'><span>Popular</span></div>
          </div>

          <div className='right'>
            <img src={require('../images/photo-1499638472904-ea5c6178a300.jpg')} alt="background04" />
            <div className='right-overlay'><span>New Arrivals</span></div>
          </div>
        </div>
      </div>

      <div className='why-choose'>
        <div className='why-choose-left'></div>
        <div className='why-choose-right'></div>
        <div className='why-choose-bg'><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste corrupti dolore quidem cumque? Quo, molestiae vero aliquid cumque, fuga beatae saepe dolores eum deserunt nostrum laboriosam. Accusantium possimus facilis molestias pariatur vel nesciunt quidem iure dolor distinctio, earum dolores incidunt optio? Minus, cum. Exercitationem mollitia et natus laudantium ullam?</div></div>
      </div>

      <div className='why-eat'>
        <div className='why-eat-bg' ><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis iste corrupti dolore quidem cumque? Quo, molestiae vero aliquid cumque, fuga beatae saepe dolores eum deserunt nostrum laboriosam. Accusantium possimus facilis molestias pariatur vel nesciunt quidem iure dolor distinctio, earum dolores incidunt optio? Minus, cum. Exercitationem mollitia et natus laudantium ullam?</div></div>
        <div className='why-eat-left'></div>
        <div className='why-eat-right'></div>
      </div>

      <div className='no-reason'>
        <img src={require('../svg/sm-想吃甜點是不需要理由的.svg')} alt="background09" />
      </div>

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

.pic-group{
  height: 700px;
  .up-big{
    width: 940px;
    height: 496px;
    margin: 0 auto;
    background-image: url(${background01});
    background-size: cover; 
    position: relative;
    z-index: 1;
  }

  .down-three{
    display: flex;
    justify-content: center;
    margin-top: -80px;
    overflow: hidden;
    div{
      width: 260px;
      height: 256px;
      font-size: 26px;
      font-weight: 400;
      position: relative;
      z-index: 10;
      img{
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      div{
        position: relative;
        top: -250%;
        left: 0;
        z-index: 100;
        opacity: 0.9;
        transition: top 0.7s linear;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    
    .left{
      &:hover .left-overlay{
        top: -100%;
      }
      .left-overlay {
        background: ${props => props.theme.colors.orange};
        color: ${props => props.theme.colors.green};
      }
    }
    
    .middle{
      border-left: 1px solid white;
      &:hover .middle-overlay{
        top: -100%;
      }
      .middle-overlay {
        background: ${props => props.theme.colors.green};
        color: ${props => props.theme.colors.white};
      }
    }

    .right{
      border-left: 1px solid white;
      &:hover .right-overlay{
        top: -100%;
      }
      .right-overlay {
        background: ${props => props.theme.colors.green};
        color: ${props => props.theme.colors.white};
      }
    }
 
  }
}  
 
.why-choose{
  width: 100%;
  height: 460px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  .why-choose-left{
    margin-left: 42px;
    width: 460px;
    height: 100%;
    background-image: url(${background05});
    background-size: cover; 
    position: relative;
    z-index: 100;
  }
   
  .why-choose-right{
    margin-right: 42px;
    width: 89px;
    height: 307px;
    background-image: url(${background06});
    background-repeat: no-repeat;
    position: relative;
    z-index: 100;
  }

  .why-choose-bg{
    margin: 20px 0;
    width: 1024px;
    height: 420px;
    position: absolute;
    background-color: ${props => props.theme.colors.greenWhite};
    z-index: 1;
    div{
      position: absolute;
      right: 180px;
      top: 110px;
      width: 300px;
      font-weight: 300;
    }
  }
}

.why-eat{
  margin-top: 60px;
  width: 100%;
  height: 460px;
  display: flex;
  justify-content: flex-end;

  .why-eat-bg{
    margin: 20px 0;
    width: 1024px;
    height: 420px;
    position: absolute;
    background-color: ${props => props.theme.colors.greenWhite};
    z-index: 1;
    div{
      position: absolute;
      left: 80px;
      top: 110px;
      width: 300px;
      font-weight: 300;
    }
  }
  .why-eat-left{
    margin-right: 42px;
    width: 89px;
    height: 307px;
    background-image: url(${background07});
    background-size: cover; 
    position: relative;
    z-index: 100;
  }
   
  .why-eat-right{
    margin-right: 42px;
    width: 460px;
    height: 100%;
    background-image: url(${background08});
    background-repeat: no-repeat;
    position: relative;
    z-index: 100;
  }
}

.no-reason{
  margin: 60px;
  display: flex;
  justify-content: center;
  img{
  height: 327px;
  object-fit: cover;
  }
}

`;

StyledHome.displayName = 'Home';

export default StyledHome;
