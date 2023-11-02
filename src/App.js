import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ReactAtom, MontyHall, Home, Portals, APISearch, Toggle, Interview } from './components';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from './utils/ThemeContext';

const ThemeWrapper = styled.div`
  background-color: ${props => (props.$darkMode ? '#333' : '#FFF')};
  color: ${props => (props.$darkMode ? '#FFF' : '#000')};
  height: 100vh;
`;

const NavWrapper = styled.div`
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Router>
      <ThemeWrapper $darkMode={darkMode}>
        <NavWrapper>
          <nav>
            <Link to="/"><ReactAtom /></Link>
            <Toggle />
          </nav>
        </NavWrapper>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apisearch" element={<APISearch />} />
          {/* <Route path="/useContext" element={<UseContextPage />} />
          <Route path="/useReducer" element={<UseReducerPage />} /> */}
          <Route path="/portals" element={<Portals />} />
          <Route path="/montyHall" element={<MontyHall />} />
          <Route path="/interview" element={<Interview />} />
        </Routes>      
      </ThemeWrapper>
    </Router>
  );
}

export default App;
