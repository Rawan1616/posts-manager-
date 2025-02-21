import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Overview from './Overview';
import Profile from './Profile';
import Reports from './Reports';

function Card() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="overview">Overview</Link> | {' '}
        <Link to="profile">Profile</Link> | {' '}
        <Link to="reports">Reports</Link>
      </nav>

      <div>
        <Routes>
          <Route path="overview" element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </div>
    </div>
  );
}

export default Card;