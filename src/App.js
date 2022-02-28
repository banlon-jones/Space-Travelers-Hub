import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import MyProfile from './components/MyProfile';
import MissionPage from './pages/mission-page/MissionPage';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<MyProfile />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/missions" element={<MissionPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
