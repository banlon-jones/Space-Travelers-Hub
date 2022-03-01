import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import Line from './components/Line';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import MissionPage from './pages/mission-page/MissionPage';
import { getMissions } from './redux/missions/missions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getMissions()); }, []);
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
