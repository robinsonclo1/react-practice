import React, {useState,  useEffect, useRef} from 'react';
import ReactDOM  from 'react-dom';
import styled from 'styled-components';
import { Container, Title, Button } from '../styles/SharedStyles'
import withCodeAccordion from './withCodeAccordion';

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 400px;
  background-color: rgba(0,0,0,0.85);
  padding: 20px;
  border-radius: 50%;
  border: 2px solid #00f;
  box-shadow: 0 0 20px #00f;
  z-index: 1000;
  color: #fff;
  text-align: center;
`;

function Interview() {
  return (
    <Container>
      <Title>This was a triumph</Title>
    </Container>
  )
}

export default withCodeAccordion(Interview, 'src/components/Interview.js');
