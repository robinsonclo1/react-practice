// Toggle.js
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../utils/ThemeContext';
import SunIcon from '../assets/sun.svg';
import MoonIcon from '../assets/moon.svg';

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70px;
  height: 34px;
  background-color: ${props => (props.$darkMode ? '#333' : '#FFF')};
  border-radius: 34px;
  padding: 5px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Toggle = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    const toggleTheme = (event) => {
      event.preventDefault()
        setDarkMode(prevDarkMode => !prevDarkMode);
    };

    return (
        <ToggleWrapper type="button" $darkMode={darkMode} onClick={toggleTheme}>
          <Icon src={darkMode ? MoonIcon : SunIcon} alt="Theme Toggle Icon" />
        </ToggleWrapper>
    );
};

export default Toggle;
