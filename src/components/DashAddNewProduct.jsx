import React, { useContext } from 'react';
import Modal from 'styled-react-modal';
import { SharedContext } from '../contexts/SharedContext';

const DashAddNewProduct = () => {
  const { isModalOpen, setIsModalOpen } = useContext(SharedContext);
  return (
    <StyledModal
      isOpen={isModalOpen}
      onBackgroundClick={() => setIsModalOpen(!isModalOpen)}
      onEscapeKeydown={() => setIsModalOpen(!isModalOpen)}
    >
      <span>Norge elsker meg!!!!</span>
      <button type='button' onClick={() => setIsModalOpen(!isModalOpen)}>
        Close me and move to Norway
      </button>
    </StyledModal>
  );
};

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => props.theme.colors.white};
`;

export default DashAddNewProduct;
