import React from 'react';
import styled from 'styled-components';

const AtomWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

const Orbit = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform-origin: center;
  animation: spin linear infinite;

  &:nth-child(1) {
    animation-duration: 8s;
  }

  &:nth-child(2) {
    animation-duration: 12s;
    transform: rotate(60deg);
  }

  &:nth-child(3) {
    animation-duration: 16s;
    transform: rotate(120deg);
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Ellipse = styled.ellipse`
  fill: none;
  stroke: #61dafb;
  stroke-width: 2;
`;

const CenterDot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: #61dafb;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

function ReactAtom() {
  return (
    <AtomWrapper>
      <Orbit>
        <Ellipse cx="50" cy="50" rx="30" ry="15" />
      </Orbit>
      <Orbit>
        <Ellipse cx="50" cy="50" rx="30" ry="15" />
      </Orbit>
      <Orbit>
        <Ellipse cx="50" cy="50" rx="30" ry="15" />
      </Orbit>
      <CenterDot />
    </AtomWrapper>
  );
}

export default ReactAtom;
