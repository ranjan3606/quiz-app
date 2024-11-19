import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminView from './views/adminView/AdminView';
import UserView from './views/userView/UserView';
import "./assets/scss/style.scss"

const App = () => (
  <Router>
    <Routes>

      <Route path="/admin" element={<AdminView />} />
      <Route path="/user" element={<UserView />} />
    </Routes>
  </Router>
);

export default App;
