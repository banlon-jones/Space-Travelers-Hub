import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Line from './components/Line';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import MissionPage from './pages/mission-page/MissionPage';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
          <Line />
        </header>
        <Routes>
          <Route path="/" element={<MyProfile />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/missions" element={<MissionPage />} />
          <Route path="/rockets" element={<Rockets />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
