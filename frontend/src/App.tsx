import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './page/LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li><Link to="/">ホーム</Link></li>
          <li><Link to="/about">アバウト</Link></li>
          <li><Link to="/login">ログイン</Link></li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/login" element={<LoginPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;

