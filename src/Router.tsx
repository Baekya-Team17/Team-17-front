// src/routes/Router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';

import App from './App';
import LoginPage from './pages/loginpage/loginpage';
import SignupPage from './pages/signuppage/signuppage';
import MainPage from './pages/mainpage/mainpage';
import HistoryPage from './pages/historypage/historypage';
import QuestionPage from './pages/questionpage/questionpage';
import Position from './pages/positionpage/Position';
import SearchParentPage from './pages/searchparentpage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/positionpage" element={<Position />} />
          <Route path="/searchparentpage" element={<SearchParentPage />} />
          <Route path="/signuppage" element={<SignupPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/historypage" element={<HistoryPage />} />
          <Route path="/questionpage" element={<QuestionPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
