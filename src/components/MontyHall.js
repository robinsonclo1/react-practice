import React, { useState, useEffect } from 'react';
import useDebounce from '../utils/Debounce.js'
import styled from 'styled-components';
import withCodeAccordion from './withCodeAccordion';

const PageContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
`;

const Door = styled.button`
    margin: 10px;
    padding: 50px 20px;
    font-size: 24px;
    cursor: pointer;
    background-color: #A67A53;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover,
    &:focus {
        background-color: #401D09;
        color: white;
    }
`;

const Notification = styled.div`
    font-size: 24px;
    margin-top: 20px;
`;

function MontyHall() {
  const [selectedDoor, setSelectedDoor] = useState(null);
  const [finalChoice, setFinalChoice] = useState(null);
  const [carDoor, setCarDoor] = useState(null);
  const [countdown, setCountdown] = useState(null);

  const debouncedDoorSelection = useDebounce(selectedDoor, 3000);

  useEffect(() => {
    setCarDoor(Math.floor(Math.random() * 3) + 1);
  }, []);

  useEffect(() => {
    if (debouncedDoorSelection !== null) {
      setFinalChoice(debouncedDoorSelection);
    }
  }, [debouncedDoorSelection]);

  function selectDoor(door) {
    setSelectedDoor(door);
    setCountdown(3);
  }

  function getDoorLabel(doorNumber) {
    if (finalChoice) {
      return doorNumber === carDoor ? '🚗' : '🐐';
    } else {
      return `Door ${doorNumber}`;
    }
  }

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  return (
      <PageContainer>
          <h1>The Debouncing Monty Hall</h1>
          <p>Pick a door, then confirm your choice within 3 seconds, or pick another door!</p>
          <Door onClick={() => selectDoor(1)}>{getDoorLabel(1)}</Door>
          <Door onClick={() => selectDoor(2)}>{getDoorLabel(2)}</Door>
          <Door onClick={() => selectDoor(3)}>{getDoorLabel(3)}</Door>
          {(selectedDoor && !finalChoice) && (
              <Notification>You picked door number {selectedDoor}, are you sure? {countdown}</Notification>
          )}
          {finalChoice &&  (
              <Notification>
                  Behind door number {finalChoice} there was a {finalChoice === carDoor ? 'car' : 'goat'}, {finalChoice === carDoor ? 'congratulations!' : 'sorry!'}
              </Notification>
          )}
      </PageContainer>
  );

}
export default withCodeAccordion(MontyHall, 'src/components/MontyHall.js');
