import React, { useContext } from 'react';
import Modal from 'styled-react-modal';
import { SharedContext } from '../contexts/SharedContext';

const DashAddNewProduct = () => {
  const { isModalOpen, setIsModalOpen } = useContext(SharedContext);
  return (
    <div>
      <StyledModal
        isOpen={isModalOpen}
        onBackgroundClick={() => setIsModalOpen(!isModalOpen)}
        onEscapeKeydown={() => setIsModalOpen(!isModalOpen)}
      >
        <span>I am a modal!</span>
        <button type='button' onClick={() => setIsModalOpen(!isModalOpen)}>
          Close me HOOK
        </button>
      </StyledModal>
    </div>
  );
};

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
`;

export default DashAddNewProduct;
