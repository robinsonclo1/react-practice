import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { MontyHall, Home, Portals, APISearch } from './components';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>

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
