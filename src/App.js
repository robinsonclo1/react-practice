import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ReactAtom, MontyHall, Home, Portals, APISearch } from './components';
import styled from 'styled-components';

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
  return (
    <Router>
      <div>
        <NavWrapper>
          <nav>
            <Link to="/"><ReactAtom /></Link>
          </nav>
        </NavWrapper>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apisearch" element={<APISearch />} />
          {/* <Route path="/useContext" element={<UseContextPage />} />
          <Route path="/useReducer" element={<UseReducerPage />} /> */}
          <Route path="/portals" element={<Portals />} />
          <Route path="/montyHall" element={<MontyHall />} />
        </Routes>      
      </div>
    </Router>
  );
}

export default App;
