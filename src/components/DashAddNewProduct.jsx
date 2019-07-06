import React from 'react';
import Modal, { ModalProvider } from 'styled-react-modal';

const DashAddNewProduct = () => {
  return (
    <ModalProvider>
      <FancyModalButton />
    </ModalProvider>
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

class FancyModalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <button type='button' onClick={this.toggleModal}>
          Click me
        </button>
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}
        >
          <span>I am a modal!</span>
          <button type='button' onClick={this.toggleModal}>
            Close me
          </button>
        </StyledModal>
      </div>
    );
  }
}

export default DashAddNewProduct;
