import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import ProductSidebar from './ProductSidebar';
import ProductContent from './ProductContent';
import backgroundImage from '../images/photo-1512484457149-266d165a4eca.jpg';
import text from '../svg/sm-想吃甜點是不需要理由的.svg';
import { SharedContext } from '../contexts/SharedContext';

const Product = ({ className }) => {
  const { product, setProduct } = useContext(SharedContext);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API}/api/${
          process.env.REACT_APP_CUSTOM
        }/products/all`
      )
      .then(result => setProduct(result.data.products));
  }, [setProduct]);

  // filter products category
  const filterProductsCategory = product.reduce((eachData, category) => {
    eachData[category.category] = 0;
    return eachData;
  }, {});
  const getProductsCategory = Object.keys(filterProductsCategory);
  console.log(getProductsCategory);

  return (
    <div className={className}>
      <div className='bgi'>
        <div>
          <img src={text} alt='no reason' />
        </div>
      </div>
      <ProductContent />

      {getProductsCategory.map(category => (
        <ProductSidebar key={category} category={category} />
      ))}

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
