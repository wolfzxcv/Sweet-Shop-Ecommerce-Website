import React, { useContext } from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import { Button, Flex, Image } from 'rebass';
import { SharedContext } from '../../../contexts/SharedContext';

const DashProductModal = () => {
  const {
    isModalOpen,
    setIsModalOpen,
    productForm,
    setProductForm,
    updateProduct,
    validateProductForm,
    resetProductForm,
  } = useContext(SharedContext);

  return (
    <StyledModal isOpen={isModalOpen}>
      <StyledTitle>
        {productForm.id === ''
          ? 'Add New Product'
          : `Edit ${productForm.title}`}
      </StyledTitle>

      <Flex m={2} justifyContent='space-around'>
        <StyledFlex flexDirection='column' justifyContent='center'>
          <div>Input image url</div>
          <input
            type='text'
            placeholder='Input image url'
            value={productForm.imageUrl}
            onChange={e =>
              setProductForm({ ...productForm, imageUrl: e.target.value })
            }
          />
          <Image width='240px' src={productForm.imageUrl} borderRadius={8} />
        </StyledFlex>
        <Flex flexDirection='column' justifyContent='space-around'>
          <div>
            Title
            <input
              type='text'
              placeholder='write your product name'
              size='50'
              value={productForm.title}
              onChange={e =>
                setProductForm({ ...productForm, title: e.target.value })
              }
            />
          </div>

          <div>
            Category
            <input
              type='text'
              placeholder='write your category'
              size='20'
              value={productForm.category}
              onChange={e =>
                setProductForm({ ...productForm, category: e.target.value })
              }
            />
          </div>

          <div>
            Enabled
            <select
              value={productForm.is_enabled}
              onChange={e =>
                setProductForm({ ...productForm, is_enabled: e.target.value })
              }
            >
              <option value='1'>YES</option>
              <option value='0'>NO</option>
            </select>
          </div>

          <div>
            Price
            <input
              type='text'
              placeholder='kr 999'
              maxLength='3'
              size='5'
              style={{ direction: 'rtl' }}
              value={productForm.price}
              onChange={e =>
                setProductForm({ ...productForm, price: e.target.value })
              }
            />
          </div>

          <div>
            Amount
            <input
              type='text'
              placeholder='99'
              maxLength='2'
              size='1'
              style={{ direction: 'rtl' }}
              value={productForm.unit}
              onChange={e =>
                setProductForm({ ...productForm, unit: e.target.value })
              }
            />
          </div>

          <div>
            <div>Allergy Advice</div>
            <textarea
              placeholder='Allergy Advice...'
              rows='3'
              cols='60'
              value={productForm.description}
              onChange={e =>
                setProductForm({
                  ...productForm,
                  description: e.target.value,
                })
              }
            />
          </div>

          <div>
            <div>Detail</div>
            <textarea
              placeholder='Detail...'
              rows='10'
              cols='60'
              value={productForm.content}
              onChange={e =>
                setProductForm({ ...productForm, content: e.target.value })
              }
            />
          </div>
        </Flex>
      </Flex>

      <Flex justifyContent='flex-end'>
        <StyledButton
          m={1}
          ml='30px'
          width='150px'
          bg='green'
          onClick={
            productForm.id === ''
              ? () => validateProductForm(productForm)
              : () => updateProduct(productForm.id)
          }
        >
          Submit
        </StyledButton>
        <StyledButton
          m={1}
          width='150px'
          bg='orange'
          color='green'
          onClick={resetProductForm}
          onKeyDown={e => {
            if (e.keyCode === 27) setIsModalOpen(false);
          }}
        >
          Close
        </StyledButton>
      </Flex>
    </StyledModal>
  );
};

const StyledModal = Modal.styled`
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${props => props.theme.colors.green};
  background-color: ${props => props.theme.colors.white};
`;

const StyledTitle = styled.div`
  padding-left: 8px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.green};
  font-size: 20px;
  font-weight: 500;
  line-height: 2;
`;

const StyledFlex = styled(Flex)`
  height: 500px;
`;

const StyledButton = styled(Button)`
  &:hover {
    cursor: pointer;
  }
`;

export default DashProductModal;
