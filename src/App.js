import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HomePage, PortalsPage } from './components';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/portals">Portals</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/useEffect" element={<UseEffectPage />} />
          <Route path="/useContext" element={<UseContextPage />} />
          <Route path="/useReducer" element={<UseReducerPage />} /> */}
          <Route path="/portals" element={<PortalsPage />} />
        </Routes>      
      </div>
    </Router>
  );
}

export default App;
