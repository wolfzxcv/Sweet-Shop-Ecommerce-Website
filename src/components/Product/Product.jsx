import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box, Flex } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import ProductSidebar from './ProductSidebar';
import ProductContent from './ProductContent';
import backgroundImage from '../../images/photo-1512484457149-266d165a4eca.jpg';
import text from '../../svg/sm-想吃甜點是不需要理由的.svg';
import { SharedContext } from '../../contexts/SharedContext';

const Product = ({ className }) => {
  const {
    isLaptop,
    getAllProduct,
    product,
    select,
    setSelect,
    page,
    setPage,
  } = useContext(SharedContext);

  useEffect(() => {
    getAllProduct();
  }, []);

  // filter products category
  const filterProductsCategory = product.reduce((eachData, category) => {
    eachData[category.category] = 0;
    return eachData;
  }, {});
  const getProductsCategory = Object.keys(filterProductsCategory).sort();

  // print out the result based on what user select
  const handleChange = category => {
    setSelect(category);
    setPage(0);
  };
  const showProduct = product
    .filter(item => item.category.includes(select))
    .filter(check => check.is_enabled !== '0');

  // 4 data per page
  const pages = showProduct.length / 4;

  return (
    <div className={className}>
      {isLaptop && (
        <div className='bgi'>
          <div>
            <img src={text} alt='no reason' />
          </div>
        </div>
      )}

      <Flex flexDirection={['column', 'row']}>
        <StyledSidebar mb={5} flexDirection='column'>
          <Box
            width={['97vw', '230px']}
            ml={['0', '20px']}
            bg='green'
            color='white'
          >
            <Flex justifyContent='center' alignItems='center'>
              CATEGORY
            </Flex>
          </Box>
          <Box ml={['0', '20px']}>
            <Flex
              justifyContent='center'
              alignItems='center'
              onClick={() => setSelect('')}
            >
              {`All (${
                product.filter(check => check.is_enabled !== '0').length
              })`}
            </Flex>
          </Box>
          {getProductsCategory.map(category => (
            <ProductSidebar
              key={category}
              category={category}
              handleChange={handleChange}
            />
          ))}
        </StyledSidebar>

        <Box width={['97vw', '1000px']}>
          <Flex flexWrap='wrap' justifyContent='space-around'>
            {showProduct.slice(4 * page, 4 * (page + 1)).map(item => (
              <ProductContent
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.imageUrl}
                price={item.price}
              />
            ))}
          </Flex>
        </Box>
      </Flex>

      {pages > 1 && (
        <div className='pagination'>
          {page < pages && page !== 0 && (
            <div
              className='add-hover'
              onClick={() => setPage(curr => curr - 1)}
              onKeyDown={() => setPage(curr => curr - 1)}
              role='button'
              tabIndex='0'
            >
              <FontAwesomeIcon icon={faCaretLeft} />
            </div>
          )}
          {showProduct.length !== 0 && <div>{page + 1}</div>}
          {pages > page + 1 && (
            <div
              className='add-hover'
              onClick={() => setPage(curr => curr + 1)}
              onKeyDown={() => setPage(curr => curr + 1)}
              role='button'
              tabIndex='0'
            >
              <FontAwesomeIcon icon={faCaretRight} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledSidebar = styled(Flex)`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 3px;
  font-family: 'Shadows Into Light', cursive;
  div {
    height: 65px;
    border: 1px solid ${props => props.theme.colors.greenWhite};
    &:hover:not(:first-child) {
      background-color: ${props => props.theme.colors.greenWhite};
      cursor: pointer;
    }
  }
`;

const StyledProduct = styled(Product)`
  margin: 0 auto 20px auto;

  @media (min-width: 769px) {
    .bgi {
      margin: 0 auto;
      margin-bottom: 50px;
      width: 940px;
      height: 496px;
    }
    .pagination {
      margin-right: 50px;
      justify-content: flex-end;
    }
  }

  @media (max-width: 768px) {
    .pagination {
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

  .pagination {
    display: flex;
    div {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      border: 1px solid ${props => props.theme.colors.greenWhite};
    }
    .add-hover {
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
