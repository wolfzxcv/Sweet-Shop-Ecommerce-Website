import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import ProductContent from './ProductContent';
import backgroundImage from '../images/photo-1512484457149-266d165a4eca.jpg';
import text from '../svg/sm-想吃甜點是不需要理由的.svg';

const Product = ({ className }) => {
  return (
    <div className={className}>
      <div className='bgi'>
        <div>
          <img src={text} alt='no reason' />
        </div>
      </div>
      <ProductContent />
      <div className='page'>
        <div>
          <FontAwesomeIcon icon={faCaretLeft} />
        </div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>
          <FontAwesomeIcon icon={faCaretRight} />
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledProduct = styled(Product)`
  margin: 20px auto;

  @media (min-width: 769px) {
    .bgi {
      margin: 0 auto;
      margin-bottom: 50px;
      width: 940px;
      height: 496px;
    }
    .page {
      margin-right: 50px;
      justify-content: flex-end;
    }
  }

  @media (max-width: 768px) {
    .page {
      justify-content: center;
    }
  }
  .bgi {
    background-image: url(${backgroundImage});
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    div {
      margin: 40px;
      width: 90px;
      height: 328px;
    }
  }

  .page {
    display: flex;
    div {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      border: 1px solid ${props => props.theme.colors.greenWhite};
      &:hover {
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.green};
        cursor: pointer;
      }
    }
  }
`;
StyledProduct.displayName = 'Product';

export default StyledProduct;
