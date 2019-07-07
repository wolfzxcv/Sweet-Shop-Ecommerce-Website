import React, { useContext } from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';
import { Button, Flex } from 'rebass';
import { SharedContext } from '../contexts/SharedContext';

const DashAddNewProduct = () => {
  const { isModalOpen, setIsModalOpen } = useContext(SharedContext);
  return (
    <StyledModal
      isOpen={isModalOpen}
      onEscapeKeydown={() => setIsModalOpen(false)}
    >
      <StyledTitle>Add New Product || Norge elsker meg</StyledTitle>

      <form
        onSubmit={e => {
          e.preventDefault();
          alert('Love you');
        }}
      >
        <Flex m={2} justifyContent='space-around'>
          <StyledFlex flexDirection='column' justifyContent='flex-start'>
            <div>Input image url</div>
            <input type='text' placeholder='Input image url' />
            <div>or Upload image</div>
            <input type='file' />
          </StyledFlex>
          <Flex flexDirection='column' justifyContent='space-around'>
            <div>
              Title
              <input
                type='text'
                placeholder='write your product name'
                size='50'
              />
            </div>

            <div>
              Category
              <input type='text' placeholder='write your category' size='20' />
            </div>

            <div>
              Enabled
              <input type='checkbox' />
            </div>

            <div>
              Price
              <input
                type='text'
                placeholder='€99.99'
                maxLength='5'
                size='5'
                style={{ direction: 'rtl' }}
              />
            </div>

            <div>
              Amount
              <input
                type='text'
                placeholder='999'
                maxLength='3'
                size='3'
                style={{ direction: 'rtl' }}
              />
            </div>

            <div>
              <div>Allergy Advice</div>
              <textarea placeholder='Allergy Advice...' rows='3' cols='60' />
            </div>

            <div>
              <div>Details</div>
              <textarea placeholder='Details...' rows='10' cols='60' />
            </div>
          </Flex>
        </Flex>
      </form>

      <Flex justifyContent='flex-end'>
        <StyledButton
          m={1}
          width='150px'
          bg='green'
          onClick={() => setIsModalOpen(false)}
          onKeyDown={e => {
            if (e.keyCode === 27) setIsModalOpen(false);
          }}
        >
          Close
        </StyledButton>
        <StyledButton
          m={1}
          ml='30px'
          width='150px'
          bg='green'
          onClick={() => {
            alert('Love you');
            setIsModalOpen(false);
          }}
        >
          Submit
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

export default DashAddNewProduct;
