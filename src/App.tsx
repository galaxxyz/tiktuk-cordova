import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components';
import TrendingFeed from './pages/TrendingFeed';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<TrendingFeed />} />
          <Route path="/:nickname" element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
