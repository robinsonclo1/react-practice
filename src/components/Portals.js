import React, {useState,  useEffect, useRef} from 'react';
import ReactDOM  from 'react-dom';
import styled from 'styled-components';
import { Container, Title, Button } from '../styles/SharedStyles'

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 400px;
  background-color: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
`;

const Modal = ({ children, isModalOpen }) => {
  if (!isModalOpen) return null;

  return ReactDOM.createPortal(
    <ModalWrapper>
      {children}
    </ModalWrapper>,
    document.getElementById('modal-root')
  );
}

function ExtraComponent({ isModalOpen, setModalOpen }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      closeButtonRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <div>
      <Modal isModalOpen={isModalOpen}>
        <h2>Thinking with Portals</h2>
        <p>
          Although this is nested in ExtraComponent, we're able to have the modal appear at the root
          of the project because we're creating a portal from our Modal component to #modal-root 
        </p>
        <p>
          Additionally, we're using useEffect() and ref to automatically focus the buttons when the modal
          is opened or closed. Try clicking enter multiple times, it should automatically focus the correct 
          button and open/close the modal.
        </p>
        <Button ref={closeButtonRef} onClick={() => setModalOpen(false)}>Close</Button>
      </Modal>
    </div>
  )
}

function Portals() {
  const [isModalOpen, setModalOpen] = useState(false);
  const openButtonRef = useRef(null);

  useEffect(() => {
    if (!isModalOpen) {
      openButtonRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <Container>
      <Title>This was a triumph</Title>
      <Button ref={openButtonRef} onClick={() => setModalOpen(true)}>Open Modal</Button>

      <ExtraComponent isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </Container>
  )
}


export default Portals;