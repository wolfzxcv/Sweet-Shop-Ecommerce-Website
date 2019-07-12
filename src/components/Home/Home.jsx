import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import background01 from '../../images/photo-1473256599800-b48c7c88cd7e.jpg';
import background02 from '../../images/photo-1499635842761-4f1f28fafcff.jpg';
import background03 from '../../images/photo-1504114133367-631ecd3db3ca.jpg';
import background04 from '../../images/photo-1499638472904-ea5c6178a300.jpg';
import background05 from '../../images/photo-1519730722595-a5ff788dea4d.jpg';
import background06 from '../../svg/lg-為什麼選擇了做甜點.svg';
import background07 from '../../svg/lg-為什麼一定要吃甜點.svg';
import background08 from '../../images/photo-1501432781167-c0ccfd492297.jpg';
import background09 from '../../svg/sm-想吃甜點是不需要理由的.svg';
import background10 from '../../svg/sm-橫式-為什麼選擇了做甜點.svg';
import background11 from '../../svg/sm-橫式-為什麼一定要吃甜點.svg';
import background12 from '../../svg/sm-橫式-想吃甜點是不需要理由的.svg';

const Home = ({ className }) => {
  return (
    <div className={className}>
      <div className='pic-group'>
        <div className='up-big' />
        <div className='down-three'>
          <div className='left'>
            <img src={background02} alt='background02' />
            <div className='left-overlay'>
              <span>Daily Select</span>
            </div>
          </div>

          <div className='middle'>
            <img src={background03} alt='background03' />
            <div className='middle-overlay'>
              <span>Popular</span>
            </div>
          </div>

          <div className='right'>
            <img src={background04} alt='background04' />

            <div className='right-overlay'>
              <span>New Arrivals</span>
            </div>
          </div>
        </div>
      </div>

      <div className='why-choose'>
        <div className='why-choose-left' />
        <div className='why-choose-right' />
        <div className='why-choose-bg'>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            iste corrupti dolore quidem cumque? Quo, molestiae vero aliquid
            cumque, fuga beatae saepe dolores eum deserunt nostrum laboriosam.
            Accusantium possimus facilis molestias pariatur vel nesciunt quidem
            iure dolor distinctio, earum dolores incidunt optio? Minus, cum.
            Exercitationem mollitia et natus laudantium ullam?
          </div>
        </div>
      </div>

      <div className='why-eat'>
        <div className='why-eat-bg'>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            iste corrupti dolore quidem cumque? Quo, molestiae vero aliquid
            cumque, fuga beatae saepe dolores eum deserunt nostrum laboriosam.
            Accusantium possimus facilis molestias pariatur vel nesciunt quidem
            iure dolor distinctio, earum dolores incidunt optio? Minus, cum.
            Exercitationem mollitia et natus laudantium ullam?
          </div>
        </div>
        <div className='why-eat-left' />
        <div className='why-eat-right' />
      </div>

      <div className='no-reason' />
    </div>
  );
};

Home.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledHome = styled(Home)`
  @media (min-width: 769px) {
    .pic-group {
      height: 700px;
      .up-big {
        width: 940px;
        height: 496px;
        margin: 0 auto;
        background-image: url(${background01});
        background-size: cover;
        position: relative;
        z-index: 1;
      }

      .down-three {
        display: flex;
        justify-content: center;
        margin-top: -80px;
        overflow: hidden;
        font-family: ${props => props.theme.fonts.title};
        div {
          width: 260px;
          height: 256px;
          font-size: 26px;
          font-weight: 400;
          position: relative;
          z-index: 10;
          img {
            display: block;
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
          div {
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

        .left {
          &:hover .left-overlay {
            top: -100%;
          }
          .left-overlay {
            background: ${props => props.theme.colors.green};
            color: ${props => props.theme.colors.white};
          }
        }

        .middle {
          border-left: 1px solid white;
          &:hover .middle-overlay {
            top: -100%;
          }
          .middle-overlay {
            background: ${props => props.theme.colors.orange};
            color: ${props => props.theme.colors.green};
          }
        }

        .right {
          border-left: 1px solid white;
          &:hover .right-overlay {
            top: -100%;
          }
          .right-overlay {
            background: ${props => props.theme.colors.green};
            color: ${props => props.theme.colors.white};
          }
        }
      }
    }

    .why-choose {
      height: 460px;
      margin-top: 40px;
      display: flex;
      justify-content: space-around;
      .why-choose-left {
        margin-left: 42px;
        top: -20px;
        width: 460px;
        height: 100%;
        background-image: url(${background05});
        background-size: cover;
        position: relative;
        z-index: 100;
      }

      .why-choose-right {
        margin-left: 42px;
        top: -20px;
        width: 89px;
        height: 307px;
        background-image: url(${background06});
        background-repeat: no-repeat;
        position: relative;
        z-index: 100;
      }
      .why-choose-bg {
        width: 100%;
        height: 420px;
        position: absolute;
        background-color: ${props => props.theme.colors.greenWhite};
        z-index: 1;
        div {
          position: absolute;
          right: 450px;
          top: 110px;
          width: 300px;
          font-weight: 300;
        }
      }
    }
    .why-eat {
      margin-top: 60px;
      width: 100%;
      height: 460px;
      display: flex;
      justify-content: flex-end;
      .why-eat-bg {
        width: 100%;
        height: 420px;
        position: absolute;
        background-color: ${props => props.theme.colors.greenWhite};
        z-index: 1;
        div {
          position: absolute;
          left: 320px;
          top: 110px;
          width: 300px;
          font-weight: 300;
        }
      }
      .why-eat-left {
        margin-right: 42px;
        top: -20px;
        width: 89px;
        height: 307px;
        background-image: url(${background07});
        background-size: cover;
        position: relative;
        z-index: 100;
      }

      .why-eat-right {
        margin-right: 260px;
        top: -20px;
        width: 460px;
        height: 100%;
        background-image: url(${background08});
        background-repeat: no-repeat;
        position: relative;
        z-index: 100;
      }
    }
    .no-reason {
      margin: 30px auto;
      width: 89px;
      height: 328px;
      background-image: url(${background09});
      background-repeat: no-repeat;
    }
  }

  @media (max-width: 768px) {
    width: 93vw;
    .pic-group {
      .up-big {
        width: 90vw;
        height: 400px;
        background-image: url(${background01});
        background-size: cover;
      }

      .down-three {
        display: flex;
        justify-content: center;
        overflow: hidden;
        font-family: ${props => props.theme.fonts.title};
        div {
          width: 30vw;
          height: 180px;
          font-size: 26px;
          font-weight: 400;
          img {
            display: block;
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
          div {
            position: relative;
            top: -100%;
            left: 0;
            z-index: 100;
            opacity: 0.9;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .left {
          .left-overlay {
            background: ${props => props.theme.colors.green};
            color: ${props => props.theme.colors.white};
          }
        }

        .middle {
          border-left: 1px solid white;
          .middle-overlay {
            background: ${props => props.theme.colors.orange};
            color: ${props => props.theme.colors.green};
          }
        }

        .right {
          border-left: 1px solid white;
          .right-overlay {
            background: ${props => props.theme.colors.green};
            color: ${props => props.theme.colors.white};
          }
        }
      }
    }

    .why-choose {
      height: 700px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 300;
      div {
        display: flex;
        background-size: cover;
      }

      .why-choose-left {
        width: 375px;
        height: 250px;
        background-image: url(${background05});
        order: 2;
      }

      .why-choose-right {
        margin: 30px 0;
        width: 196px;
        height: 60px;
        background-image: url(${background10});
      }

      .why-choose-bg {
        padding: 0 30px;
        width: 90vw;
        height: 292px;
        background-color: ${props => props.theme.colors.greenWhite};
        order: 3;
        align-items: center;
      }
    }

    .why-eat {
      height: 600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 300;
      div {
        display: flex;
        background-size: cover;
      }

      .why-eat-bg {
        padding: 0 30px;
        width: 90vw;
        height: 292px;
        background-color: ${props => props.theme.colors.greenWhite};
        order: 3;
        align-items: center;
      }
      .why-eat-left {
        margin: 30px 0;
        width: 200px;
        height: 70px;
        background-image: url(${background11});
      }

      .why-eat-right {
        width: 375px;
        height: 250px;
        background-image: url(${background08});
      }
    }

    .no-reason {
      margin: 30px auto;
      width: 226px;
      height: 60px;
      background-image: url(${background12});
      background-repeat: no-repeat;
    }
  }
`;

StyledHome.displayName = 'Home';

export default StyledHome;
